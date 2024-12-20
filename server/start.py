import subprocess
import sys
import os

def create_venv():
    """Crea un ambiente virtuale se non esiste."""
    if not os.path.exists('./venv'):
        print("Creazione dell'ambiente virtuale...")
        subprocess.check_call([sys.executable, '-m', 'venv', 'venv'])
    else:
        print("Ambiente virtuale trovato.")

def install_requirements():
    """Installa i requisiti nell'ambiente virtuale."""
    print("Attivando l'ambiente virtuale...")
    venv_python = os.path.join('venv', 'bin', 'python') if os.name != 'nt' else os.path.join('venv', 'Scripts', 'python.exe')
    if not os.path.exists('requirements.txt'):
        print("Nessun file requirements.txt trovato.")
        sys.exit(1)
    print("Trovato requirements.txt, installo le dipendenze...")
    subprocess.check_call([venv_python, '-m', 'pip', 'install', '--no-cache-dir', '-r', 'requirements.txt'])

def run_app():
    """Esegue l'applicazione."""
    venv_python = os.path.join('venv', 'bin', 'python') if os.name != 'nt' else os.path.join('venv', 'Scripts', 'python.exe')
    if os.path.exists('app.py'):
        print("Eseguendo app.py...")
        subprocess.check_call([venv_python, 'app.py'])
    else:
        print("Nessun file app.py trovato.")
        sys.exit(1)

if __name__ == '__main__':
    create_venv()
    install_requirements()
    run_app()
