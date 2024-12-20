# Usa un'immagine Python leggera
FROM python:3.11-slim

# Imposta la directory di lavoro nel container
WORKDIR /app

# Copia i file richiesti nel container
COPY . .

# Installa le dipendenze senza usare la cache di pip
RUN pip install --no-cache-dir -r requirements.txt

# Espone la porta che usa l'app (ad esempio Flask usa la porta 5000 di default)
EXPOSE 5000

CMD ["gunicorn", "-w", "4", "-b", "0.0.0.0:5000", "app:app"]
