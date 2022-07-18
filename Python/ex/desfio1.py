"""
-[ ] Criar variaveis para nome (str), idade (int),
-[ ] altura (float) e peso (float) de uma pessoa
-[ ] Criar variavel com o ano atual (int)
-[ ] Obter o ano de nascimento da pessoa (baseado na idade e no ano atual)
-[ ] Obter o IMC da pessoa com 2 casas decimais (peso e na altura da pessoa)
-[ ] Exibir um texto com todos os valores na tela usando F-Strings
"""

from datetime import datetime

nome = str(input("Qual seu nome? "))
idade = int(input("Qual sua idade? "))
altura = float(input("Qual sua altura? "))
peso = float(input("Qual o seu peso? "))

anoN = datetime.now().year - idade

imc = peso / (altura * altura)

print(f'{nome} tem {idade} anos, {altura} de altura e pesa {peso:.0f}kg.'
      f'\nO IMC de {nome} vale {imc:.2f}'
      f'\n{nome} nasceu em {anoN}')
