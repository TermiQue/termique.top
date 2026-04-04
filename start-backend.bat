@echo off
REM 启动FastAPI后端服务的Windows批处理脚本

echo Starting FastAPI Backend Server...
echo.

REM 激活虚拟环境并启动后端
call .venv\Scripts\activate.bat
python backend/main.py

pause
