-- Creazione della tabella Scuola
CREATE TABLE Scuola (
    ID_Scuola INT AUTO_INCREMENT PRIMARY KEY,
    Nome VARCHAR(100) NOT NULL,
    PasswordHash VARCHAR(255) NOT NULL,
    Indirizzo VARCHAR(100),
    Telefono VARCHAR(15),
    Email VARCHAR(100),
    Citta VARCHAR(50)
);

-- Creazione della tabella Azienda
CREATE TABLE Azienda (
    ID_Azienda INT AUTO_INCREMENT PRIMARY KEY,
    Nome VARCHAR(100) NOT NULL,
    PasswordHash VARCHAR(255) NOT NULL,
    Indirizzo VARCHAR(100),
    Telefono VARCHAR(15),
    Email VARCHAR(100),
    Citta VARCHAR(50),
    Settore VARCHAR(50)
);

-- Creazione della tabella Persona
CREATE TABLE Persona (
    ID_Persona INT AUTO_INCREMENT PRIMARY KEY,
    Nome VARCHAR(50) NOT NULL,
    Cognome VARCHAR(50) NOT NULL,
    DataDiNascita DATE,
    Indirizzo VARCHAR(100),
    Telefono VARCHAR(15),
    Email VARCHAR(100),
    PasswordHash VARCHAR(255) NOT NULL,
    IsExStudente BOOLEAN NOT NULL,
    AnnoDiploma YEAR NULL,
    ID_Scuola INT NULL,
    ID_Azienda INT NULL,
    FOREIGN KEY (ID_Scuola) REFERENCES Scuola(ID_Scuola) ON DELETE CASCADE,
    FOREIGN KEY (ID_Azienda) REFERENCES Azienda(ID_Azienda) ON DELETE SET NULL
);

-- Creazione della tabella Competenza
CREATE TABLE Competenza (
    ID_Competenza INT AUTO_INCREMENT PRIMARY KEY,
	Nome VARCHAR(100) NOT NULL,
    Descrizione VARCHAR(100) NOT NULL
);

-- Creazione della tabella PersonaCompetenza
CREATE TABLE PersonaCompetenza (
    ID_Persona INT NOT NULL,
    ID_Competenza INT NOT NULL,
    PRIMARY KEY (ID_Persona, ID_Competenza),
    FOREIGN KEY (ID_Persona) REFERENCES Persona(ID_Persona) ON DELETE CASCADE,
    FOREIGN KEY (ID_Competenza) REFERENCES Competenza(ID_Competenza) ON DELETE CASCADE
);

CREATE TABLE Certificazione (
    ID_Certificazione INT AUTO_INCREMENT PRIMARY KEY,
	Nome VARCHAR(100) NOT NULL,
    Descrizione VARCHAR(100) NOT NULL
);

-- Creazione della tabella PersonaCertificazione
CREATE TABLE PersonaCertificazione (
    ID_Persona INT NOT NULL,
    ID_Certificazione INT NOT NULL,
    Data_Rilascio DATE NOT NULL,
    Data_Scadenza DATE,
    Numero_Certificato VARCHAR(50),
    Stato VARCHAR(50),
    PRIMARY KEY (ID_Persona, ID_Certificazione),
    FOREIGN KEY (ID_Persona) REFERENCES Persona(ID_Persona) ON DELETE CASCADE,
    FOREIGN KEY (ID_Certificazione) REFERENCES Certificazione(ID_Certificazione) ON DELETE CASCADE
);




