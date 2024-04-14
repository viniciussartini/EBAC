# Front-End - Módulo 10 - Plugins jQuery
---

## Introdução
Neste módulo será introduzido os plugins jQuery:
1. [Slick](https://kenwheeler.github.io/slick/) - Para criação de carrossel de imagens;
2. [jQueryValidation](https://jqueryvalidation.org/) - Para validar formulários através do jQuery;
3. [jQueryMaskPlugin]( https://igorescobar.github.io/jQuery-Mask-Plugin/) - Para aplicação de máscara em campos de formulário;
---
## Importação do jQuery e seus plugins

### jQuery
Para importar o **jQuery** com uso da CDN, adicione os códigos abaixo antes da tag de fechamento `</body>`.

```
<script type="text/javascript" src="https://code.jquery.com/jquery-1.11.0.min.js"></script>
<script type="text/javascript" src="https://code.jquery.com/jquery-migrate-1.2.1.min.js"></script>
```

### Slick
Para importar os arquivos do *plugin* com uso da CDN.
Dentro da tag `<head>`, insira os comandos abaixo:
```
<link rel="stylesheet" type="text/css" href="//cdn.jsdelivr.net/npm/slickcarousel@1.8.1/slick/slick.css"/>
<link rel="stylesheet" type="text/css" href="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick-theme.css"/>
```
Antes da tag de fechamento `</body>` e logo após a importação do **jQuery**.
```
<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js"></script>
```

### jQueryValidation
Faça o download do arquivo no link disponibilizado na introdução e coloque dentro da pasta do seu projeto. Em seguida, importe o arquivo `jquery.validate.min.js` antes da tag de fechamento `</body>`.
Para que as mensagens de validação do plugin sejam exibidas em português PT-BR, adicione o arquivo `messages_pt_BR.min.js` na pasta do seu projeto e, logo em seguida, faça a importação antes da tag de fechamento `</body>`.

```
<script src="scripts/jquery.validate.min.js"></script>
<script src="scripts/messages_pt_BR.min.js"></script>
```

### jQueryMaskPlugin
Faça o download do arquivo no link disponibilizado na introdução e coloque dentro da pasta do seu projeto. Em seguida, importe o arquivo `jquery.mask.min.js` antes da tag de fechamento `</body>`.

```
<script src="scripts/jquery.mask.min.js"></script>
```

---