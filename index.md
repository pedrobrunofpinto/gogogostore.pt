---
layout: indexpage
sss: Loja Online de Roupa Masculina. Compre em Portugal Continental e Ilhas T-shirts, Camisas, Polos, Casacos e muito mais. Portes grátis para compras superiores a 40€. Encontre a roupa da moda que procura! 
---
<div class="popcontain">
 <div class="row pop-up">
        <div class="box small-6 large-centered">
            <a href="#" class="close-button">&#10006;</a>
              <img class="popimage" style="width:140%; align-self:center;" src="https://scontent.fopo2-2.fna.fbcdn.net/v/t1.0-9/60308444_2222125511215631_2111516466581864448_o.jpg?_nc_cat=104&_nc_ht=scontent.fopo2-2.fna&oh=e0a785ab7dfcf1e9b7e3c9a04b9af018&oe=5D644C2B"> 
              <img class="mobilepop" style="width:200%; align-self:center;" src="/assets/images/minipromo.jpg">     
        </div>
    </div>
</div>


<div id="overlay" class="cover blur-in">

<h1 style="font-size: 1px;z-index: -200; position: absolute; top: 0;">GOGOGO Store - Loja Online de Roupa Masculina</h1>
<div class="wrapper">
  
  <div class="carousel">
    <div class="inner">
<a href="{{ site.url }}/tshirts" class="slide active">
      	<p></p>
      </a>
<a href="{{ site.url }}/camisas" class="slide">
        <p style="font-size: 100px; color: white; text-shadow: 100;"></p>
      </a>
    </div>
    <div class="arrow arrow-left"></div>
    <div class="arrow arrow-right"></div>
  </div>

</div>
<br>
<h2 style="text-align: center;text-transform: uppercase;margin: 20px 0 20px 0;">Últimas Novidades</h2>

<div class="displayprod" style="width: 100%;flex-wrap: wrap;justify-content: center;">
  {% for t in site.products %}
  {% if t.new %}
   <li data-oozer-filter="{{ t.att }} {{ t.color[0] }} {{ t.color[1] }} {{ t.discrip }}" class="prod">
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
<div class="bottomdiv" style="align-items:center;width:100%;display: flex;align-content: center;justify-content: center;flex-wrap: wrap;">
  <div class="containshirts" style=" position: absolute;z-index: 100;">
  <div style="justify-content: center;display: flex;flex-direction: column;" class="besttshirts">
<h1 class="botomh1" style="text-transform: uppercase; text-align: center; font-size: 45px;color:white;">Nova Coleção SS19</h1>
<button class="buttonlow submite" style="text-align: center; text-transform: uppercase; color:black; font-size: 15px;" onclick="location.href='{{ site.url }}/tshirts/'" type="button">Ver Coleção</button>
</div>
</div>
<a href="{{ site.url }}/tshirts/" style="display: flex;align-self: center;align-items: center;justify-content: center;"><img style="width:80%;" class="imgbottom" src="/assets/images/tshirtsbannerpic.jpg"></a>
</div>
</div>
{% include footer.html %}
</div>

