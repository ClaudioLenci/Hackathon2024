# Usa un'immagine Python leggera
FROM python:3.11-slim

# Imposta la directory di lavoro nel container
WORKDIR /app

# Copia i file richiesti nel container
COPY . .

# Usa una cache per pip con un ID prefissato dalla chiave "pip"
RUN --mount=type=cache,id=pip-cache-${BUILD_ID},target=/root/.cache/pip \
    pip install --no-cache-dir -r requirements.txt

# Espone la porta che usa l'app (ad esempio Flask usa la porta 5000 di default)
EXPOSE 5000

# Comando di default per avviare l'app
CMD ["python", "app.py"]
