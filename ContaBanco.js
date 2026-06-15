public class ContaBanco {

    private double saldoAtual = 400.00;
    private String nomeCliente = "Alanis";
    private String senhaCliente = "072009";
    private String agenciaCliente = "MercadoPago";
    private int numeroConta = 430;
}

public void sacaValor(double valor) {
    if (valor <= saldoAtual) {
            saldoAtual -= valor;
            System.out.println("Saque realizado com sucesso!");
    }
    else {
            System.out.println("Saldo insuficiente!");
        }
    }

public void depositarValor(double valor) {
        saldoAtual += valor;
        System.out.println("Depósito realizado com sucesso!");
    }

public boolean validarSenha(String senha) {
        return senhaCliente.equals(senha);
    }

public void verSaldo() {
        System.out.println("Saldo atual: R$ " + saldoAtual);
    }

public static void main(String[] args) {

        ContaBanco conta = new ContaBanco();

        if (conta.validarSenha("072009")) {
            System.out.println("Acesso permitido!");
            conta.verSaldo();

            conta.depositarValor(100);
            conta.verSaldo();

            conta.sacaValor(50);
            conta.verSaldo();
        } else {
            System.out.println("Senha incorreta!");
        }
    }
