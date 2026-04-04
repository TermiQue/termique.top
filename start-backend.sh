#!/bin/bash
# 启动FastAPI后端服务的Linux/Mac脚本

echo "Starting FastAPI Backend Server..."
echo ""

# 激活虚拟环境并启动后端
source .venv/bin/activate
python backend/main.py
