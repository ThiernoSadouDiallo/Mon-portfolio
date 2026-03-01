@echo off
echo ========================================
echo   Portfolio Angular - Demarrage
echo ========================================
echo.

if not exist node_modules (
    echo Installation des dependances...
    call npm install
    echo.
)

echo Demarrage du serveur de developpement...
echo Le portfolio sera accessible sur http://localhost:4200
echo.
call ng serve

pause
