def stamps_dp(amount_cents, stamp_values):
    INF = float('inf')
    n = len(stamp_values)

    opt = [[INF] * (amount_cents + 1) for _ in range(n)]

    for s in range(n):
        opt[s][0] = 0

    for s in range(n):
        selo = stamp_values[s]
        for i in range(1, amount_cents + 1):
            if s > 0:
                opt[s][i] = opt[s - 1][i]

            if selo <= i and opt[s][i - selo] + 1 < opt[s][i]:
                opt[s][i] = opt[s][i - selo] + 1
    return opt


def find_solution(dp_table, amount_cents, stamp_values):
    INF = float('inf')
    n = len(stamp_values)

    if dp_table[n - 1][amount_cents] == INF:
        return None

    selos_usados = []
    i = amount_cents
    s = n - 1

    while i > 0:
        selo = stamp_values[s]

        if s == 0 or dp_table[s][i] != dp_table[s - 1][i]:
            selos_usados.append(selo)
            i -= selo
        else:
            s -= 1

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