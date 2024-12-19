import hashlib

def Sha512Hash(Password):
    HashedPassword=hashlib.sha512(Password.encode('utf-8'))
    return HashedPassword.hexdigest()

def check_password_hash(HashedPassword, Password):
    return HashedPassword == Sha512Hash(Password)