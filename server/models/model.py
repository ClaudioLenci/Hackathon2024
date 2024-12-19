from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class Scuola(db.Model):
    __tablename__ = 'Scuola'
    
    ID_Scuola = db.Column(db.Integer, primary_key=True, autoincrement=True)
    Nome = db.Column(db.String(100), nullable=False)
    PasswordHash = db.Column(db.String(255), nullable=False)
    Indirizzo = db.Column(db.String(100))
    Telefono = db.Column(db.String(15))
    Email = db.Column(db.String(100))
    Citta = db.Column(db.String(50))

    persone = db.relationship('Persona', backref='scuola', cascade="all, delete-orphan")

class Azienda(db.Model):
    __tablename__ = 'Azienda'
    
    ID_Azienda = db.Column(db.Integer, primary_key=True, autoincrement=True)
    Nome = db.Column(db.String(100), nullable=False)
    PasswordHash = db.Column(db.String(255), nullable=False)
    Indirizzo = db.Column(db.String(100))
    Telefono = db.Column(db.String(15))
    Email = db.Column(db.String(100))
    Citta = db.Column(db.String(50))
    Settore = db.Column(db.String(50))

    persone = db.relationship('Persona', backref='azienda', cascade="all, delete-orphan")

class Persona(db.Model):
    __tablename__ = 'Persona'
    
    ID_Persona = db.Column(db.Integer, primary_key=True, autoincrement=True)
    Nome = db.Column(db.String(50), nullable=False)
    Cognome = db.Column(db.String(50), nullable=False)
    DataDiNascita = db.Column(db.Date)
    Indirizzo = db.Column(db.String(100))
    Telefono = db.Column(db.String(15))
    Email = db.Column(db.String(100))
    PasswordHash = db.Column(db.String(255), nullable=False)
    IsExStudente = db.Column(db.Boolean, nullable=False)
    AnnoDiploma = db.Column(db.Integer)
    
    ID_Scuola = db.Column(db.Integer, db.ForeignKey('Scuola.ID_Scuola'), nullable=False)
    ID_Azienda = db.Column(db.Integer, db.ForeignKey('Azienda.ID_Azienda'), nullable=True)
    
    competenze = db.relationship('Competenza', secondary='PersonaCompetenza', backref='persone')

class Competenza(db.Model):
    __tablename__ = 'Competenza'
    
    ID_Competenza = db.Column(db.Integer, primary_key=True, autoincrement=True)
    Nome = db.Column(db.String(100), nullable=False)
    Descrizione = db.Column(db.String(100), nullable=False)

class PersonaCompetenza(db.Model):
    __tablename__ = 'PersonaCompetenza'
    
    ID_Persona = db.Column(db.Integer, db.ForeignKey('Persona.ID_Persona'), primary_key=True)
    ID_Competenza = db.Column(db.Integer, db.ForeignKey('Competenza.ID_Competenza'), primary_key=True)
    
    persona = db.relationship('Persona', backref=db.backref('persona_competenze', cascade='all, delete-orphan'))
    competenza = db.relationship('Competenza', backref=db.backref('persona_competenze', cascade='all, delete-orphan'))   

class Certificazione(db.Model):
    __tablename__ = 'Certificazione'
    
    ID_Certificazione = db.Column(db.Integer, primary_key=True, autoincrement=True)
    Nome = db.Column(db.String(100), nullable=False)
    Descrizione = db.Column(db.String(100), nullable=False)


class PersonaCertificazione(db.Model):
    __tablename__ = 'PersonaCertificazione'
    
    ID_Persona = db.Column(db.Integer, db.ForeignKey('Persona.ID_Persona'), primary_key=True)
    ID_Certificazione = db.Column(db.Integer, db.ForeignKey('Certificazione.ID_Certificazione'), primary_key=True)
    
    Data_Rilascio = db.Column(db.Date, nullable=False)
    Data_Scadenza = db.Column(db.Date, nullable=True)
    Numero_Certificato = db.Column(db.String(50), nullable=True)
    Stato = db.Column(db.String(50), nullable=False)
    
    persona = db.relationship('Persona', backref=db.backref('persona_certificazioni', cascade='all, delete-orphan'))
    certificazione = db.relationship('Certificazione', backref=db.backref('persona_certificazioni', cascade='all, delete-orphan'))