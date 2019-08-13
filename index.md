---
layout: indexpage
sss: Loja Online de Roupa Masculina. Compre em Portugal Continental e Ilhas T-shirts, Camisas, Polos, Casacos e muito mais. Portes grátis para compras superiores a 40€. Encontre a roupa da moda que procura! 

---
<div class="popcontain" style="width:100%;">
 <div class="row pop-up" style="width: 50%;">
        <div class="box small-6 large-centered" style="display: flex;
        flex-direction: column;width: 100%;justify-content: center; height: 500px;background-color: white; border: 4px solid black;">
            <a href="#" class="close-button">&#10006;</a>
        <h2 class="textbot sete" style="width:60%;font-size:35px; color: black;align-self: center;padding: 20px 20px 20px 20px;text-align: center;">MEDO DE FICAR DE FORA?</h2>
        <h2 class="textbot" style="width:60%;font-size:15px; color: black;align-self: center;padding: 20px 20px 20px 20px;text-align: center;">Receba <bold>PORTES GRÁTIS</bold> em todas as compras ao subscrever!</h2>
<form class="newsletter" style="margin-bottom: 10px; margin-top: 10px;align-self: center;width:50%;display: flex;flex-direction: column;" method="POST" data-netlify="true" action="{{ site.url }}">
    <input class="placek" style="width:100%;text-align: center;" type="email" name="email" placeholder="Email">
    <input type="hidden" name="_after" value="{{ site.url }}">
    <input type="text" name="_honey" value="" style="display:none">
    <div class="like"><input  style="text-align: center;-webkit-appearance: none;" class="certosoquenao" type="submit" name="form-name" value="JUNTA-TE AO GANG!"></div>
</form>  
        </div>
    </div>
</div>


<div id="overlay" class="cover blur-in">
    <div id="slider" style="display: block;">
  <div>
    <h6 class="textflow" style="font-size: 15px;">PORTES GRÁTIS ACIMA 40€!</h6> 
  </div>
  <div>
    <h6 class="textflow" style="font-size: 15px;">SEGUE-NOS NO <a href="https://www.instagram.com/gogogostore/"> INSTAGRAM!</a></h6>
  </div>
  <div>
    <h6 class="textflow" style="font-size: 15px;">INSCREVE-TE NA NOSSA NEWSLETTER E RECEBE 15%!</h6>  
  </div>
                
</div> 
<h1 style="font-size: 1px;z-index: -200; position: absolute; top: 0;">GOGOGO Store - Loja Online de Roupa Masculina</h1>
<div class="wrapper">
  <div class="carousel">
    <div class="inner" style="">
<a href="{{ site.url }}/saldos" class="slide active">
  <div class="slidek">
  <button class="newcl" style="font-family: 'Montserrat', sans-serif;
    position: absolute;
    top: 500px;
    color: white;
    display: flex;
    text-align: center;
    align-items: center;font-size: 30px;justify-content: center;text-shadow: 2px 2px black;">test</button></div></a>
<a href="{{ site.url }}/camisas" class="slide">
  <p class="newcl" style="font-family: 'Montserrat', sans-serif;
    height: 100vh;
    position: absolute;
    top: -50px;
    color: white;
    width: 100%;
    display: flex;
    text-align: center;
    align-items: center;font-size: 30px;justify-content: center;text-shadow: 2px 2px black;"></p>
<p class="bottext" style="font-family: 'Playfair Display', serif;
    height: 100vh;
    position: absolute;
    top: 0;
    color: white;
    width: 100%;
    display: flex;
    text-align: center;
    align-items: center;font-size: 60px;justify-content: center;text-shadow: 2px 2px black;"></p></a>
    <a href="{{ site.url }}/camisas" class="slide">
  <p class="newcl" style="font-family: 'Montserrat', sans-serif;
  font-weight: thin !important;
    height: 100vh;
    position: absolute;
    top: -50px;
    color: white;
    width: 100%;
    display: flex;
    text-align: center;
    align-items: center;font-size: 30px;justify-content: center;"></p>
<p class="bottext" style="font-family: 'Playfair Display', serif;
    height: 100vh;
    position: absolute;
    top: 0;
    color: white;
    width: 100%;
    display: flex;
    text-align: center;
    align-items: center;font-size: 60px;justify-content: center;"></p></a>
    </div>

  </div>
</div>
<div class="themiddle" style="display: flex; width: 100%;">
<a style="" href="{{ site.url }}/fatosdetreino">
  <div style="display: flex; position: relative;">
  <img style="align-self: center; width: 100%; height: ;" src="/assets/images/trash.jpg">
  <div style="position: absolute; display: flex; justify-content: flex-end; flex-direction: column; height: 100%; width: 100%;"><button class="submite" style="align-self: center;" onclick="location.href='{{ site.url }}/fatosdetreino/'">Shop Now</button>
  </div>
</div>
</a>
<a href="{{ site.url }}/tshirts">
  <div style="display: flex; position: relative;">
  <img style="align-self: center; width: 100%; height: ;" src="/assets/images/fotobaixosegundamo.jpg">
 <div style="position: absolute; display: flex; justify-content: flex-end; flex-direction: column; height: 100%; width: 100%;"><button class="submite" style="align-self: center;" onclick="location.href='{{ site.url }}/tshirts/'">Shop Now</button>
  </div>
</div>
</a>
</div>
<h2 style="  text-align: center;text-transform: uppercase;margin: 20px 0 20px 0;     font-family: 'Ropa Sans', sans-serif !important;
">TOP CHOICES</h2>
<div style="    justify-content: center; display: flex;" class="sliderx" id="sliderx">
<div class="displayprod slidex" id="slidex" style="">
  {% for t in site.products %}
  {% if t.inicial %}
   <li data-oozer-filter="{{ t.att }} {{ t.color[0] }} {{ t.color[1] }} {{ t.discrip }}" class="prod item">
  <div class="productplace" >
  <a href="{{ site.url }}/products/{{ t.categoria }}/{{ t.att }}/{{ t.link }}"><img class="productimage" src="{{ t.image }}" data-src="{{ t.image }}" data-hover="{{ t.sec }}" alt=""></a>
    <div class="btn">
      <button class="snipcart-add-item thisbtn"
    data-item-id="{{ t.id }}"
    data-item-name="{{ t.name }}"
    data-item-price="{{ t.price }}"
    data-item-weight="{{ t.weight }}"
    data-item-custom2-name="Tamanho"
    data-item-custom2-options="S|M|L|XL"
    data-item-custom2-required="true"
    data-item-custom3-name="Cor"
    data-item-custom3-options="{{ t.color[0] }}"
    data-item-custom3-required="True"
    data-item-quantity="1"
    data-item-url="{{ site.url }}/products/{{ t.categoria }}/{{ t.att }}/{{ t.link }}"
    data-item-description="{{ t.discrip }}"
    data-item-image="{{ t.image }}">
    Adicionar ao carrinho   
</button>
<h4 class="h4name" style="display: flex;justify-content: space-around;" data-position="{{ t.price }}">{{ t.name }}<p style="color:red;font-size: 9px;">New</p></h4>
      <h4 class="h4price" data-position="{{ t.price }}">Preço:{{ t.price }}0€</h4>
  {% endif %}
  {% endfor %}
</div>
</div>
</li>
</div>
</div>


<a class="botdis" href="">
    <div style="display: flex; position: relative;">
  <img style="align-self: center; width: 100%;" src="/assets/images/olaomeunomearnaldo.jpg">
   <div style="position: absolute; display: flex; justify-content: flex-end; flex-direction: column; height: 100%; width: 100%;"><button class="submite" style="align-self: flex-start; margin: 0 0 20px 60px;" onclick="location.href='{{ site.url }}/tshirts/'">Shop Collection</button>
  </div>
</div>
</a>

<a class="botmob" href="">
    <div style="display: flex; position: relative;">
  <img style="align-self: center; width: 100%;" src="/assets/images/olaomeunomearnaldomo.jpg">
   <div style="position: absolute; display: flex; justify-content: flex-end; flex-direction: column; height: 100%; width: 100%;"><button class="submite" style="align-self: flex-start; margin: 0 0 20px 60px;" onclick="location.href='{{ site.url }}/tshirts/'">Shop Collection</button>
  </div>
</div>
</a>

<h2 style="  text-align: center;text-transform: uppercase;margin: 20px 0 20px 0;     font-family: 'Ropa Sans', sans-serif !important;
">Hats and Caps</h2>
<div style="    justify-content: center; display: flex;" class="sliderx" id="sliderx">
<div class="displayprod slidex" id="slidex" style="">
  {% for t in site.products %}
  {% if t.categoria == "bonesecaps" %}
   <li data-oozer-filter="{{ t.att }} {{ t.color[0] }} {{ t.color[1] }} {{ t.discrip }}" class="prod item">
  <div class="productplace" >
  <a href="{{ site.url }}/products/{{ t.categoria }}/{{ t.att }}/{{ t.link }}"><img class="productimage" src="{{ t.image }}" data-src="{{ t.image }}" data-hover="{{ t.sec }}" alt=""></a>
    <div class="btn">
      <button class="snipcart-add-item thisbtn"
    data-item-id="{{ t.id }}"
    data-item-name="{{ t.name }}"
    data-item-price="{{ t.price }}"
    data-item-weight="{{ t.weight }}"
    data-item-custom2-name="Tamanho"
    data-item-custom2-options="S|M|L|XL"
    data-item-custom2-required="true"
    data-item-custom3-name="Cor"
    data-item-custom3-options="{{ t.color[0] }}"
    data-item-custom3-required="True"
    data-item-quantity="1"
    data-item-url="{{ site.url }}/products/{{ t.categoria }}/{{ t.att }}/{{ t.link }}"
    data-item-description="{{ t.discrip }}"
    data-item-image="{{ t.image }}">
    Adicionar ao carrinho   
</button>
<h4 class="h4name" style="display: flex;justify-content: space-around;" data-position="{{ t.price }}">{{ t.name }}<p style="color:red;font-size: 9px;">New</p></h4>
      <h4 class="h4price" data-position="{{ t.price }}">Preço:{{ t.price }}0€</h4>
  {% endif %}
  {% endfor %}
</div>
</div>
</li>
</div>
</div>

<div style="padding: 0 20px 0 20px; justify-content: space-between; display: none;">

<div style="display: flex; width: 100%; flex-direction: column;">
  <h2 style="  text-align: center;text-transform: uppercase;margin: 20px 0 20px 0;     font-family: 'Ropa Sans', sans-serif !important;
">FOLLOW US ON INSTAGRAM</h2>
  <div style="display: flex; width: 100%">


<div style="  position: relative;  overflow: hidden; width: 400px; height: 400px;" >
  <a  href="https://www.instagram.com/p/Bz8I1xElxx9/"><img class="instsapic" style="width: 100%;" src="assets/images/chamine.jpg"></a>
</div>

<div style="display: flex; flex-direction: column;">

<div style=" margin: 0 2px 2px 2px; position: relative; overflow: hidden; width: 197px; height: 198px;" >
  <a  href="https://www.instagram.com/p/ByFU_RwHLeA/"><img class="instsapic" style="width: 100%;" src="assets/images/italiaaaa.jpg"></a>
</div>


<div style=" margin: 2px; position: relative; overflow: hidden; width: 197px; height: 198px;" >
  <a  href="https://www.instagram.com/p/ByIH38on-qr/"><img class="instsapic" style="width: 100%;" src="assets/images/polix.jpg"></a>
</div>


</div>


<div class="nothing" style="display: flex; flex-direction: column;">


<div style="display: flex;">

<div style=" margin: 2px; position: relative; overflow: hidden; width: 197px; height: 198px;" >
  <a  href="https://www.instagram.com/p/BxujlFhnr6n/"><img class="instsapic" style="width: 100%;" src="assets/images/fred.jpg"></a>
</div>

<div style=" margin: 2px; position: relative; overflow: hidden; width: 197px; height: 198px;" >
  <a  href="https://www.instagram.com/p/BzsRtLBnrEV/"><img class="instsapic" style="width: 100%;" src="assets/images/tulio.jpg"></a>

</div>
</div>

<div style="  position: relative;  overflow: hidden; width: 400px; height: 400px;" >
  <a  href="https://www.instagram.com/p/Bz8I1xElxx9/"><img class="instsapic" style="width: 100%;" src="assets/images/chamine.jpg"></a>
</div>


</div>
</div>
</div>



<h2 style="  text-align: center;text-transform: uppercase;margin: 20px 0 20px 0;     font-family: 'Ropa Sans', sans-serif !important;
">GOGOGO LIFESTYLE</h2>
</div>

{% include footer.html %}
</div>
