@echo off
cd /d "%~dp0"
echo Starting Next.js development server...
echo Open http://localhost:3000 in your browser
"C:\Program Files\nodejs\node.exe" node_modules\next\dist\bin\next.js dev
pause
