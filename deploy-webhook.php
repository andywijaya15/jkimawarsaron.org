<?php
// ponytail: basic webhook executor with token guard, add HMAC signature verification if multi-tenant or public API
header('Content-Type: application/json; charset=utf-8');

$expectedToken = 'jkims_deploy_9f2a71d8e4c3b5';
$providedToken = $_GET['token'] ?? $_SERVER['HTTP_X_DEPLOY_TOKEN'] ?? '';

if (!hash_equals($expectedToken, (string)$providedToken)) {
    http_response_code(403);
    echo json_encode(['status' => 'error', 'message' => 'Forbidden: Invalid deploy token']);
    exit;
}

$workDir = __DIR__;
chdir($workDir);

if (!is_dir($workDir . '/.git')) {
    http_response_code(500);
    echo json_encode(['status' => 'error', 'message' => 'Current directory is not a git repository']);
    exit;
}

// Execute git fetch and hard reset to ensure clean sync with branch deploy
$cmd = 'git fetch origin deploy && git reset --hard origin/deploy 2>&1';
$output = [];
$returnCode = 0;
exec($cmd, $output, $returnCode);

if ($returnCode === 0) {
    http_response_code(200);
    echo json_encode([
        'status' => 'success',
        'message' => 'Deploy pulled successfully',
        'output' => $output,
        'timestamp' => date('Y-m-d H:i:s')
    ]);
} else {
    http_response_code(500);
    echo json_encode([
        'status' => 'error',
        'message' => 'Git pull failed',
        'output' => $output,
        'code' => $returnCode
    ]);
}
