from django.test import TestCase
from .dp import stamps_dp, find_solution, resolver_selos


class CoinChangeDPTest(TestCase):

    def setUp(self):
        self.stamp_values = [59, 11, 20, 16, 21, 90, 50, 10]

    def test_dp_caso_base(self):
        """opt[0] deve ser sempre 0"""
        opt = stamps_dp(0, self.stamp_values)
        self.assertEqual(opt[0], 0)

    def test_dp_valor_exato_de_um_selo(self):
        """10 centavos = 1 selo de 10"""
        opt = stamps_dp(10, self.stamp_values)
        self.assertEqual(opt[10], 1)

    def test_dp_valor_com_dois_selos(self):
        """20 centavos = 1 selo de 20"""
        opt = stamps_dp(20, self.stamp_values)
        self.assertEqual(opt[20], 1)

    def test_dp_valor_impossivel(self):
        """1 centavo não pode ser formado com os selos disponíveis"""
        opt = stamps_dp(1, self.stamp_values)
        self.assertEqual(opt[1], float('inf'))

    def test_dp_tamanho_correto(self):
        """Tabela deve ter tamanho amount_cents + 1"""
        amount = 50
        opt = stamps_dp(amount, self.stamp_values)
        self.assertEqual(len(opt), amount + 1)

    def test_find_solution_soma_correta(self):
        """A soma dos selos retornados deve ser igual ao valor pedido"""
        amount = 100
        opt = stamps_dp(amount, self.stamp_values)
        selos = find_solution(opt, amount, self.stamp_values)
        self.assertEqual(sum(selos), amount)

    def test_find_solution_impossivel_retorna_none(self):
        """Valor impossível deve retornar None"""
        amount = 1
        opt = stamps_dp(amount, self.stamp_values)
        selos = find_solution(opt, amount, self.stamp_values)
        self.assertIsNone(selos)

    def test_find_solution_selos_validos(self):
        """Todos os selos retornados devem estar na lista de disponíveis"""
        amount = 80
        opt = stamps_dp(amount, self.stamp_values)
        selos = find_solution(opt, amount, self.stamp_values)
        for selo in selos:
            self.assertIn(selo, self.stamp_values)

    def test_find_solution_quantidade_otima(self):
        """Deve usar o menor número possível de selos"""
        amount = 20
        opt = stamps_dp(amount, self.stamp_values)
        selos = find_solution(opt, amount, self.stamp_values)
        self.assertEqual(len(selos), 1)

    def test_resolver_possivel(self):
        """Deve retornar possivel=True para valor alcançável"""
        resultado = resolver_selos(100, self.stamp_values)
        self.assertTrue(resultado['possivel'])

    def test_resolver_soma_correta(self):
        """Soma dos selos usados deve ser igual ao valor pedido"""
        resultado = resolver_selos(100, self.stamp_values)
        self.assertEqual(sum(resultado['selos_usados']), 100)

    def test_resolver_impossivel(self):
        """Deve retornar possivel=False para valor não alcançável"""
        resultado = resolver_selos(1, self.stamp_values)
        self.assertFalse(resultado['possivel'])

    def test_resolver_impossivel_listas_vazias(self):
        """Quando impossível, selos_usados e combinacao_otima devem ser vazios"""
        resultado = resolver_selos(1, self.stamp_values)
        self.assertEqual(resultado['selos_usados'], [])
        self.assertEqual(resultado['combinacao_otima'], {})

    def test_resolver_combinacao_otima_agrupa_corretamente(self):
        """combinacao_otima deve agrupar selos repetidos"""
        resultado = resolver_selos(20, self.stamp_values)
        total = sum(
            valor * qtd
            for valor, qtd in resultado['combinacao_otima'].items()
        )
        self.assertEqual(total, 20)

    def test_resolver_retorna_tabela(self):
        """Resultado deve sempre conter a tabela DP"""
        resultado = resolver_selos(50, self.stamp_values)
        self.assertIn('tabela', resultado)
        self.assertEqual(len(resultado['tabela']), 51)