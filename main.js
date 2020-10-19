function items(title,image,description, button){
    var item = {}
    item.title=title,
    item.image=image,
    item.description=description
    item.button=button
    return item
}
var item1=items('Winter-Jacket', 'https://ae01.alicdn.com/kf/Hb4c99f279b64485d9ab1dc93003c5e22A/2020-Alpinestars-Winter-Jacket-Men-Fashion-Stand-Collar-Male-Parka-Jacket-Mens-Solid-Thick-Jackets-and.jpg_220x220xz.jpg_.webp','Price:17$','Add To List')
var item2 =items('Hoodie-Trouser','https://ae01.alicdn.com/kf/H63ed512cffbf4c50a831e25d61ddcf708/2020-hot-sale-autumn-and-winter-new-brand-men-s-suit-casual-sports-fleece-font-b.jpg_220x220xz.jpg_.webp','Price:14$','Add To List')
var item3=items('T-Shirt','https://ae01.alicdn.com/kf/H140aab3edae742e4b0310f570b8f3fd9v/Men-Polo-Men-Shirt-Short-Sleeve-Polo-Shirt-Contrast-Color-Polo-New-Clothing-Summer-Streetwear-Casual.jpg_220x220xz.jpg_.webp','Price:20$','Add To List')
var item4=items('Wedding-Suit','https://ae01.alicdn.com/kf/Hfbcb8e7e10bf485fa2770f0ee98b89deo/New-Fashion-Handsome-Dark-Gray-Mens-Suit-Groom-Suit-Wedding-Suits-For-Best-Men-Slim-Fit.jpg_220x220xz.jpg_.webp','Price:150$','Add To List')
var item5=items('Shoes','https://ae01.alicdn.com/kf/H7b9df92791df4348923b2468f8425a08z/Leather-Men-Shoes-Luxury-Brand-England-Trend-Casual-Shoes-Men-Sneakers-Italian-Breathable-Leisure-Male-Footwear.jpg_220x220xz.jpg_.webp','Price:50$','Add To List')
var item6=items('Female-T-shirt','https://ae01.alicdn.com/kf/Hf0444c32308544bf9330218978e18d79K/Female-T-shirt-cartoon-PAZ-Mafalda-or-QUIERO-Cafe-printed-female-graphic-T-shirt-Harajuku-funny.jpg_220x220xz.jpg_.webp','Price:10$','Add To List')
var item7=items('Female-Jeans-Jacket','https://ae01.alicdn.com/kf/HTB1u1K4czbguuRkHFrdq6z.LFXaD/2020-Winter-Jeans-Jackets-Plus-Velvet-Warm-Parka-Outerwear-Women-Cashmere-Cotton-Coat-Girl-Fashion-Denim.jpg_220x220xz.jpg_.webp','Price:30$','Add To List')
var item8=items('Mini-Dress','https://ae01.alicdn.com/kf/H664b6460e9da4c828e7b835a1db1d352v/Simplee-Casual-suit-collar-autumn-women-dress-Long-sleeve-office-lady-asymmetrical-long-dress-Slim-with.jpg_220x220xz.jpg_.webp','Price:50$','Add To List')
var item9=items('Skirt','https://ae01.alicdn.com/kf/H79a6a84a6ed0461dbb120ddc046dda14a/Neploe-High-Waist-Hip-Women-Skirt-Solid-A-line-Pocket-Jupe-Femme-Autumn-Winter-Wild-Boycon.jpg_220x220xz.jpg_.webp','Price:40$','Add To List')
var item10=items('Female-Trousres','https://ae01.alicdn.com/kf/H75e26e9a252941c5add01050ba27dba16/Korean-High-Waist-Jeans-Women-Harem-Pants-Loose-Casual-Plus-Size-High-Street-Denim-Trousers-Pantalon.jpg_220x220xz.jpg_.webp','Price:30$','Add To List')
var array = [item1,item2,item3,item4,item5,item6,item7,item8,item9,item10]


function model(item){
    $('#main').append('<div class="cards_men" id="'+item.title+'"></div>')
    $('#'+item.title+'').append('<h3>'+item.title+'</h3>')
    $('#'+item.title+'').append("<img src='"+item.image+"'></img>")
    $('#'+item.title+'').append('<p>'+item.description+'</p>')
    $('#'+item.title+'').append('<button class="btn">'+item.button+'</button>')
    console.log($('.cards_men'))
}

function models(array){
    for(var i= 0; i<array.length; i++){
        model(array[i])
    }
}
models(array)