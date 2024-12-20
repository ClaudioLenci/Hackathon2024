# Usa l'immagine ufficiale di Python
FROM python:3

# Imposta l'ambiente Python in modalità unbuffered (utile per logging in tempo reale)
ENV PYTHONUNBUFFERED=1 

# Crea la cartella di lavoro all'interno del container
WORKDIR /app

# Copia il codice locale all'interno del container
COPY . /app/

# Installa le dipendenze del progetto
RUN pip install --no-cache-dir -r requirements.txt

# Aggiungi un file Procfile per Railway (se necessario)
RUN echo "web: gunicorn main:app" > Procfile

# Avvia il servizio web all'avvio del container utilizzando gunicorn
CMD ["gunicorn", "main:app"]
