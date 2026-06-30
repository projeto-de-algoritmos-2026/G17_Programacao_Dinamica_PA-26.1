# 💌 LoveStamps

LoveStamps é uma aplicação web desenvolvida em Django que utiliza **programação dinâmica** para calcular a combinação ótima de selos postais para pagar o valor exato de uma carta.

O projeto foi desenvolvido para a disciplina de **Projeto de Algoritmos** da UnB, ministrada pelo professor Maurício Serrano, em 2026.1.

---

## Como funciona

O usuário informa quanto tem disponível para pagar pela carta. O sistema então calcula, usando o algoritmo de **Coin Change com Programação Dinâmica**, a menor quantidade de selos necessária para atingir exatamente aquele valor e exibe os selos correspondentes.

---

## Sobre o algoritmo

O problema é uma variação clássica do **Coin Change Problem**, resolvido em duas etapas:

### 1. `stamps_dp(amount_cents, stamp_values)`

Monta a tabela OPT onde cada posição `opt[i]` armazena o **menor número de selos** necessário para formar `i` centavos.

```bash
opt[0] = 0 # caso base
opt[i] = min(opt[i - selo] + 1)  # para cada selo disponível
```

### 2. `find_solution(dp_table, amount_cents, stamp_values)`

Percorre a tabela de trás para frente para **rastrear quais selos** foram usados na solução ótima.

### Exemplo

Valor: R$ 0,80 (80 centavos)
Selos disponíveis: 10, 11, 12, 15, 16, 17, 18, 20, 21, 22, 27, 34, 38, 50, 53, 55, 59, 90
Solução ótima: 1x R$0,59 + 1x R$0,21 = R$0,80 (2 selos)

## Como rodar o projeto

### Pré-requisitos
- Python 3.10+
- pip

### Instalação

**Clone o repositório**

```bash
git clone https://github.com/projeto-de-algoritmos-2026/G17_Programacao_Dinamica_PA-26.1.git
cd dynamic_stamps
```

**Crie e ative o ambiente virtual**

```bash
python -m venv venv

# Windows
venv\Scripts\activate

# Linux/Mac
source venv/bin/activate
```

**Instale as dependências**
```bash
pip install -r requirements.txt
```

### Banco de dados

```bash
python manage.py migrate
python manage.py loaddata shop/fixtures/selos.json
```

### Rode o servidor

```bash
python manage.py runserver
```

Acesse: [http://127.0.0.1:8000](http://127.0.0.1:8000)

---

## Testes

```bash
python manage.py test shop
```
---

## Equipe

| Estudante     | Matrícula  | 
| ------------- | ---------- | 
| Ludmila Nunes | 231026750  |

## Vídeo de apresentação

Assista ao vídeo de apresentação do projeto [aqui](https://youtu.be/uxyZn4p98z8).