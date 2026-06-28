from django import forms


class SeloForm(forms.Form):
    valor = forms.DecimalField(
        min_value=0.01,
        decimal_places=2,
        label='Quanto você tem disponível para pagar pela carta?',
        widget=forms.NumberInput(attrs={
            'placeholder': 'Ex.: R$ 10,00',
            'step': '0.01',
        })
    )