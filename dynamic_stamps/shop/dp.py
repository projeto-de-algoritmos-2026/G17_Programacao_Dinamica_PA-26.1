def stamps_dp(amount_cents, stamp_values):
    INF = float('inf')
    
    opt = [INF] * (amount_cents + 1)
    
    opt[0] = 0

    for i in range(1, amount_cents + 1):
        for selo in stamp_values:
            if selo <= i and opt[i - selo] + 1 < opt[i]:
                opt[i] = opt[i - selo] + 1

    return opt


def find_solution(dp_table, amount_cents, stamp_values):
    INF = float('inf')
    
    if dp_table[amount_cents] == INF:
        return None

    selos_usados = []
    i = amount_cents

    while i > 0:
        for selo in stamp_values:
            if selo <= i and dp_table[i - selo] == dp_table[i] - 1:
                selos_usados.append(selo)
                i -= selo
                break

    return selos_usados


def resolver_selos(amount_cents, stamp_values):
    dp_table = stamps_dp(amount_cents, stamp_values)
    selos_usados = find_solution(dp_table, amount_cents, stamp_values)

    if selos_usados is None:
        return {
            'tabela': dp_table,
            'selos_usados': [],
            'combinacao_otima': {},
            'possivel': False,
        }

    combinacao_otima = {}
    for selo in selos_usados:
        combinacao_otima[selo] = combinacao_otima.get(selo, 0) + 1

    return {
        'tabela': dp_table,
        'selos_usados': selos_usados,
        'combinacao_otima': combinacao_otima,
        'possivel': True,
    }