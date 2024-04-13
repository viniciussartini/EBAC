# Front-End - Módulo 10 - Plugins jQuery
---

## Introdução
Neste módulo será introduzido os plugins jQuery:
1. [Slick](https://kenwheeler.github.io/slick/) - Para criação de carrossel de imagens;
2. [jQueryValidation](https://jqueryvalidation.org/) - Para validar formulários através do jQuery;
3. [jQueryMaskPlugin]( https://igorescobar.github.io/jQuery-Mask-Plugin/) - Para aplicação de máscara em campos de formulário;
---
## Importação dos plugins



### Slick
Para importar os arquivos do *plugin* com uso da CDN.
Dentro da tag `<head>`:
```
<link rel="stylesheet" type="text/css" href="//cdn.jsdelivr.net/npm/slickcarousel@1.8.1/slick/slick.css"/>
<link rel="stylesheet" type="text/css" href="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick-theme.css"/>
```
Dentro da tag `<body>` antes de seu fechamento e logo após a importação do jQuery.
```
<script type="text/javascript" src="https://code.jquery.com/jquery-1.11.0.min.js"></script>
<script type="text/javascript" src="https://code.jquery.com/jquery-migrate-1.2.1.min.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js"></script>
```

---