---
title: Szakmai portfólió
subtitle: Markdown-vezérelt, Eleventy-alapú bemutató
description: "Egy Eleventy-alapú megoldás, amely egyetlen, könnyen karbantartható felületen fogja össze a korábban különálló projektjeimet. A bemutató fókuszában a rendszerszintű gondolkodásom áll - a probléma felismerésétől a tervezési döntéseken át egészen a mérhető eredményekig."
short_description: Egy Eleventy-alapú megoldás, amely egyetlen, könnyen karbantartható felületen fogja össze a korábban különálló projektjeimet.
date: 2026-07-01
github: https://github.com/bwgabor/bwgabor.github.io
technologies: [Eleventy, Nunjucks, GitHub Pages]
icon: display
---

## A kiinduló helyzet {.section-title .my-4}

A projektjeim és ez a weboldal párhuzamosan készültek. Hamar felismertem, hogy egy önálló, professzionális felület tökéletes kontextust és narratívát ad a munkáimnak, megmutatva a forráskód mögötti gondolkodásmódot is.

Egy központi portfólió emellett sokkal praktikusabb a szakmai jelenlétem építéséhez. A LinkedIn-profilomban és a CV-mben is elegánsabb egyetlen, letisztult hivatkozást megadni, amely rögtön egy strukturált, összefüggő bemutatót nyit meg a leendő olvasó számára.


## Megközelítés {.section-title .my-4}

A folyamat a GitHub Pages adottságainak feltérképezésével és egy statikus HTML oldal felépítésével indult. Fejlesztés közben merült fel az igény a portfólió elemeinek dinamikus beolvasására, amihez első körben egy kliensoldali JavaScript megoldást vizsgáltam.

A fordulópontot egy AI-jal folytatott ötletelés jelentette, amely elvezetett a statikus weboldalgenerátorok (SSG) koncepciójához. Ez a megközelítés sokkal tisztább, rendszerszintű választ adott a karbantarthatóság problémájára.

Az Astro, Jekyll és Hugo értékelése után az Eleventy mellett döntöttem. Ennek fő oka az alacsony belépési küszöb, illetve a korábbi CMSMS-es Smarty tapasztalataimhoz hasonló sablonrendszer volt.

A párhuzamos kötelezettségek miatt a projektbe fektethető idő szűkös volt, így a fejlesztést kisebb, jól dokumentált iterációkra bontottam. Ez a strukturált keretrendszer biztosította a folyamatos, kiszámítható haladást a menet közbeni technológiai irányváltás ellenére is.


## Technikai megoldás {.section-title .my-4}

Az oldal Eleventy (11ty) architektúrára épül: a tartalom Markdownban él, a megjelenítést Nunjucks sablonok kezelik, a stílusért pedig moduláris SCSS felel. Az adatáramlás központosított: a projektoldalak adatai (cím, dátum, leírás, technológiák) a Markdown frontmatterből származnak, a navigációt pedig egy Nunjucks ciklus építi fel dinamikusan.

A repository tisztán a forráskódot tárolja. A main branchre történő push után egy GitHub Actions workflow automatikusan elvégzi a buildelést, és publikálja a statikus HTML kimenetet.

| Kategória | Technológia | Miért ez |
| --------- | ----------- | -------- |
| SSG engine | Eleventy (11ty) | Könnyű tanulási görbe, natív Markdown és Nunjucks támogatás, alacsony overhead. |
| Sablonrendszer | Nunjucks | Smarty-hoz hasonló logika (for ciklusok, változók, layout öröklés) - ismerős paradigma. |
| Tartalomforrás | Markdown | Frontmatter-alapú adatkezelés, fókuszált és gyors tartalomvitel. |
| Stílus | SCSS (partial-alapú) | Logikailag elkülönített fájlok (`_variables.scss`, `_layout.scss`), amelyeket a build egyetlen CSS fájlba fordít. |
| CI/CD | GitHub Actions | Teljesen automatizált build és deploy folyamat. |
| Hosting | GitHub Pages | Költséghatékony, karbantartásmentes statikus felület a `gh-pages` branchről publikálva. |

{.table .my-4}


A biztonsági felállás a statikus architektúrából fakadóan egyszerű: szerveroldali logika, adatbázis és autentikáció hiányában a támadási felület minimális. A rendszer teljesítményét minden fejlesztési mérföldkő után a Google PageSpeed Insights segítségével validáltam.


## Eredmény {.section-title .my-4}

A projekt sikeresen elérte a célját: létrejött egy központi, publikusan hivatkozható portfólió. Az architektúra biztosítja a zökkenőmentes skálázódást, így az új munkák egyszerű Markdown fájlok hozzáadásával, a meglévő struktúra módosítása nélkül integrálhatók. A main branchre történő publikálás után a GitHub Actions automatizáltan végigviszi a teljes folyamatot a buildtől a deployig.

A 2026. júliusi, éles környezeten végzett Google PageSpeed Insights mérések az alábbi eredményeket hozták:

| Metrika        | Érték |
| -------------- | ----- |
| Performance    | 92    |
| Accessibility  | 98    |
| Best Practices | 100   |
| SEO            | 100   |

{.table}

A maximális Best Practices és SEO értékek a választott architektúra (statikus tartalom, tiszta HTML-szemantika) egyenes következményei. A 92-es Performance érték ugyanakkor kijelöli a további fejlődési irányt: a tervezett Gulp-alapú build pipeline (minifikálás, optimalizált asset-kezelés) és egyedi SCSS keretrendszer bevezetése kifejezetten ezen a területen hoz majd javulást.

A fejlesztés eredményeként az eddigi elszigetelt projektlinkek helyét egyetlen, letisztult felület vette át, amely fenntartható alapot biztosít a jövőbeli szakmai jelenlétemhez.


## Mit tanultam {.section-title .my-4}

A kezdeti AI-támogatott tervezés során hamar felszínre került, hogy az eredeti feladatstruktúrám finomításra szorul. Ez a felismerés vezetett az inkrementális fejlesztési modell tudatos alkalmazásához: a folyamatot úgy alakítottam át, hogy minden mérföldkő végén egy azonnal szállítható, önmagában is működőképes verziót kapjak.

A projekt egyértelműen megerősítette azt a szakmai elvemet, hogy a fenntartható rendszer alapja az egyszerűség, a strukturáltság és a transzparens dokumentáció. A cél mindvégig egy letisztult, karbantartható és jól skálázható alap megteremtése volt.

Ez a mérnöki megközelítés - kiegészítve a GitHub Actions-re épülő automatizációval és a tervezett Gulp pipeline-nal - szorosan illeszkedik a DevOps kultúrához. Mivel jelenleg is ebbe az irányba képzem magam, a felépített portfólió immár tökéletes alapot ad a jövőbeli DevOps, Systems Engineer és Infrastructure Engineer fókuszú projektjeim bemutatásához.