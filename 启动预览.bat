@echo off
setlocal
cd /d "%~dp0"

if not exist "node_modules\.bin\vite.cmd" (
  echo [错误] 未找到网站依赖。
  echo 请先在此文件夹打开终端并运行：pnpm install
  pause
  exit /b 1
)

start "Portfolio Preview" /b "node_modules\.bin\vite.cmd" --host 127.0.0.1 --port 5173
timeout /t 2 /nobreak >nul
start "" "http://localhost:5173/"

endlocal
