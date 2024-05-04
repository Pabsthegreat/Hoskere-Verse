from cryptography.hazmat.primitives.ciphers import Cipher, algorithms, modes #provide classes for working with cryptographic ciphers, algorithms, and modes of operation.
from cryptography.hazmat.backends import default_backend #efault cryptographic backend for performing cryptographic operations.
from cryptography.hazmat.primitives import padding
from base64 import b64encode, b64decode #used to encode and decode data in Base64 format.
import os

def encrypt_AES(message, key):
    # Generate a random initialization vector (IV) 16-byte (128-bit)
    iv = os.urandom(16)
    
    # Pad the message to be a multiple of 16 bytes since 128 bit AES is being used
    padder = padding.PKCS7(128).padder()
    padded_message = padder.update(message) + padder.finalize() #Pads the message with PKCS7 padding.
    #Public-Key Cryptography Standards #7, is a cryptographic padding scheme used to ensure that the length of plaintext data being encrypted or decrypted is a multiple of the block size of the cipher being used.
    # Create an AES cipher object with the key and IV
    cipher = Cipher(algorithms.AES(key), modes.CBC(iv), backend=default_backend())
    encryptor = cipher.encryptor()#By calling cipher.encryptor(), we're creating an encryptor object that is configured to encrypt data using the AES cipher in CBC mode with the parameters we specified earlier (such as the key and IV). We'll use this encryptor object to encrypt plaintext data block by block.
    
    # Encrypt the padded message
    ciphertext = encryptor.update(padded_message) + encryptor.finalize()
    
    # Return the IV and ciphertext as base64-encoded strings
    return b64encode(iv).decode('utf-8'), b64encode(ciphertext).decode('utf-8')

def decrypt_AES(iv, ciphertext, key):
    # Decode the IV and ciphertext from base64
    iv = b64decode(iv)
    ciphertext = b64decode(ciphertext)
    
    # Create an AES cipher object with the key and IV
    cipher = Cipher(algorithms.AES(key), modes.CBC(iv), backend=default_backend())
    decryptor = cipher.decryptor()
    
    # Decrypt the ciphertext
    padded_message = decryptor.update(ciphertext) + decryptor.finalize()
    
    # Unpad the decrypted message
    unpadder = padding.PKCS7(128).unpadder()
    message = unpadder.update(padded_message) +  unpadder.finalize()
    
    return message

# Example usage:
key = os.urandom(32)  # Generate a random 256-bit (32-byte) key

message = b"Hello, world!"  # Message to be encrypted The b prefix before a string literal, such as b"Hello, world!", indicates that the string should be treated as a bytes object rather than a regular string (Unicode string).

# Encrypt the message
iv, ciphertext = encrypt_AES(message, key)
print("IV:", iv)
print("Ciphertext:", ciphertext)

# Decrypt the ciphertext
decrypted_message = decrypt_AES(iv, ciphertext, key)
print("Decrypted message:", decrypted_message.decode('utf-8'))
