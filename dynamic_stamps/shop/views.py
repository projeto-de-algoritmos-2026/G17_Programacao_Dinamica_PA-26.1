from django.shortcuts import render, redirect
from django.templatetags.static import static
from .forms import SeloForm
from .models import Selo
from .dp import resolver_selos


def index(request):
    if request.method == 'POST':
        form = SeloForm(request.POST)

        if form.is_valid():
            valor_decimal = form.cleaned_data['valor']
            amount_cents = int(valor_decimal * 100)

            stamp_values = list(Selo.objects.values_list('valor_centavos', flat=True))

            resultado = resolver_selos(amount_cents, stamp_values)

            selos_resultado = []
            for valor_centavos, quantidade in resultado['combinacao_otima'].items():
                selo = Selo.objects.get(valor_centavos=valor_centavos)
                selos_resultado.append({
                    'nome': selo.nome,
                    'imagem': static(selo.imagem),
                    'valor_centavos': valor_centavos/100,
                    'quantidade': quantidade,
                    'range': list(range(quantidade)),
                })

            request.session['resultado'] = {
                'possivel': resultado['possivel'],
                'amount_cents': amount_cents,
                'selos_resultado': selos_resultado,
            }

            return redirect('resultado')

    else:
        form = SeloForm()

    selos = Selo.objects.all()
    return render(request, 'shop/index.html', {
        'form': form,
        'selos': selos,
    })


def resultado(request):
    dados = request.session.get('resultado')

    if not dados:
        return redirect('index')

    return render(request, 'shop/resultado.html', {
        'dados': dados,
    })