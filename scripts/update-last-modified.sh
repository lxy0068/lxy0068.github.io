#!/bin/bash

# 脚本：从 Git 获取最新提交时间并生成 JSON 文件
# 用法：在部署前运行此脚本，或使用 Git hooks 自动运行

# 获取最新提交的时间戳（ISO 8601 格式）
LAST_MODIFIED=$(git log -1 --format=%cI 2>/dev/null)

# 如果 Git 命令失败或不在 Git 仓库中，使用当前时间
if [ -z "$LAST_MODIFIED" ]; then
    LAST_MODIFIED=$(date -u +"%Y-%m-%dT%H:%M:%SZ")
fi

# 生成 JSON 文件
cat > last-modified.json <<EOF
{
  "lastModified": "$LAST_MODIFIED"
}
EOF

echo "已更新 last-modified.json: $LAST_MODIFIED"

