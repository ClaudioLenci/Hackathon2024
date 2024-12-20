import subprocess
import sys
import os

def install_requirements():
    if os.path.exists('requirements.txt'):
        print("Trovato requirements.txt, installo le dipendenze...")
        subprocess.check_call([sys.executable, '-m', 'pip', 'install', '--no-cache-dir', '-r', 'requirements.txt'])
    else:
        print("Nessun file requirements.txt trovato.")
        sys.exit(1)

def run_app():
    if os.path.exists('app.py'):
        print("Eseguendo app.py...")
        subprocess.check_call([sys.executable, 'app.py'])
    else:
        print("Nessun file app.py trovato.")
        sys.exit(1)
        

if __name__ == '__main__':
    install_requirements()
    run_app()
