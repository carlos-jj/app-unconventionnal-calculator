# **Guia prático para iniciantes.**

> # GIT : source code control


## **Use Case**

- [✅] Você deseja criar pontos na história da produção do seu projecto.

- [✅] Você deseja verificar mudanças feitas no seu projeto.

## **Commands**

- Inicialisa a linha do tempo:
```
  git init
```

- Escolher ficheiros a se adicionar ao repositório:
```
  git add <filename> -> ficheiro especifico

  git add . -> All files
```
- Adicionar ao repositorio:
```
  git commit -m "description"
```

- Visualisar os Commits feitos:
```
  git log
```
- Verificar o estado do desenvolvimento
```
  git status
```
- Verificar commits já feitos:
```
  git show -> o ultimo feito
  git show <token_do_commit> -> especifico
```

## **Use Case**

- [✅] Você quer começar uma nova funcionalidade no seu projecto, sem estragar o que ja foi feito.

- [✅] Você quer adicionar as novas funcionalidades ao seu projecto em produção (principal).

- [✅] Você quer deletar a branch da nova funcionalidade, depois de aplicar em seu projecto.


## **Commands**

***Branches - ramificações do projecto principal.***

- Criar uma nova branch:
```
branch <name-of-branch>
```
- Mudar para a nova branch:
```
git checkout <name-of-branch>
```
- Mostrar todas as ramificações existentes:
```
git branch
```

- Fundir outras branches ao seu projecto principal :
```
on master branch:
> git merge <name-of-branch>
```

- Deletar uma branch criada:
```
git branch -D <name-of-branch>
```

> # GITHUB : repositório remoto

## **Use case** 

- [] Você quer colocar seu projecto na nuvem.

## **commands**

- Adicionar/Connectar a um repositorio remoto
```
git remote add origin <url-of-the-repository-on-github>
```

- Ver os repositórios remotos disponiveis
```
git remote -v
```