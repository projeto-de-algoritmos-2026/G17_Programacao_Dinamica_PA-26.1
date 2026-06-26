from django.db import models

class Selo(models.Model):
    nome = models.CharField(max_length=100)
    valor = models.DecimalField(max_digits=5, decimal_places=2)
    imagem = models.ImageField(upload_to='stamps/')

    class Meta:
        ordering = ['valor']

    def __str__(self):
        return f"{self.nome} - R$ {self.valor}"