export function calcularConsumo(
  potencia,
  horas,
  dias,
  setResultado
) {

  const potenciaNumero = Number(potencia);
  const horasNumero = Number(horas);
  const diasNumero = Number(dias);


  // Verificar se os valores foram preenchidos

  if (
    potencia === '' ||
    horas === '' ||
    dias === ''
  ) {

    setResultado(
      '⚠️ Preencha todos os campos para realizar o cálculo.'
    );

    return;
  }


  // Verificar se os valores são válidos

  if (
    potenciaNumero <= 0 ||
    horasNumero <= 0 ||
    diasNumero <= 0
  ) {

    setResultado(
      '⚠️ Digite valores maiores que zero.'
    );

    return;
  }


  // Cálculo do consumo

  const consumoKwh =
    (potenciaNumero * horasNumero * diasNumero) / 1000;


  // Mensagem dependendo do consumo

  let mensagem;


  if (consumoKwh < 10) {

    mensagem =
      '💚 O consumo estimado é baixo.';

  }

  else if (consumoKwh < 50) {

    mensagem =
      '💛 O consumo estimado é moderado.';

  }

  else {

    mensagem =
      '🟠 O consumo estimado é alto. Vale a pena observar o tempo de uso do aparelho.';

  }


  // Retorno para o usuário

  setResultado(

    `⚡ RESULTADO\n\n` +

    `Consumo estimado: ${consumoKwh.toFixed(2)} kWh\n\n` +

    `${mensagem}`

  );

}