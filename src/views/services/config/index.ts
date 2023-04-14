export interface Feature {
  title: string;
  label: string;
  paragraphs: string[];
  products: string[];
  image: string;
}

export const FEATURES: Feature[] = [
  {
    title: 'Digital Printing',
    label: 'Digital Printing',
    paragraphs: [
      'You’re probably the most familiar with this technology—and for good reason! Digital printing is fast and cost effective for shorter runs, extremely high quality and boasts capabilities such as variable data printing (VDP), allowing for personalization within large orders.',
      'Unlike more traditional systems, digital printers do not require physical plates, or templates, to be made for each product. Instead, digital printers use a complex of lasers and photographic paper to run the image straight from a computer onto your choice of media. Check out the section below for examples of popular digital printing products.',
    ],
    products: [
      'Business Cards',
      'Brochures',
      'Postcards',
      'Booklets',
      'Envelopes',
      'Labels',
      'Letterheads',
      'Flyers',
      'Notepads',
      'Catalogs',
      'Pocket Folders',
      'Calendars',
    ],
    image: 'printing',
  },
  {
    title: 'Offset Printing',
    label: 'Offset Printing',
    paragraphs: [
      'First patented in England in 1875, the offset press has been a staple of print manufacturing for over one hundred and forty years.',
      'The process begins with etching the desired image onto a metal cylindrical plate. Water and ink is then delicately applied to the plate’s surface. Finally, the plate transfers, or “offsets”, the image to a rubber cylinder, called a blanket, which prints the wet ink on the page. Cost effective for mid to long runs, offset printing produces reliable color tones and can be used on a variety of surfaces and merchandise.',
      'If you’re not sure if this method is right for you, feel to give us a call and we’ll be happy to provide a free quote and expert consultation!',
    ],
    products: [
      'Carbonless Forms',
      'Tabs',
      'Business Cards',
      'Folders',
      'Envelopes',
      'Letterheads',
      'Labels',
      'Notepads',
    ],
    image: 'offset-printing',
  },
  {
    title: 'Wide Format',
    label: 'Wide Format',
    paragraphs: [
      'Signs, banners, posters, vehicle graphics—you name it, we’re used to thinking big! That means starting with the highest quality materials, printing with the latest technology and finishing with expert installations.',
      'It also means your designs are printed to last, crafted to be as bright and beautiful on Day 500 as the day they rolled off our presses. We print stickers, promotional items and much, much more!',
    ],
    products: [
      'Yard Signs',
      'Banners',
      'Posters',
      'Vinyl Decals',
      'Feather Flags',
      'Photo Prints',
      '3D Lettering',
      'Magnets',
      'Canvas Prints',
      'Vehicle Graphics',
      'Window Graphics ',
      'Wall Graphics',
    ],
    image: 'printers',
  },
  {
    title: 'Mailing',
    label: 'Mailing',
    paragraphs: [
      'With over two decades of fulfillment and mailing experience, our logistics team ensures that order always arrives in the most efficient and cost-effective way possible.',
      'Our complete mailing services include CASS and NCOA certification, data base maintenance, dupe elimination, and local delivery/pick-up options.',
    ],
    products: [],
    image: 'mailing',
  },
  {
    title: 'Online Storefront & Fulfillment',
    label: 'Storefront & Fulfillment',
    paragraphs: [
      'Customize your very own interactive storefront and make ordering your favorite products even easier.',
      'We provide a variety of fulfillment solutions, such as assembly and kitting, inventory management, static/variable print options and specialized reporting and tracking.',
    ],
    products: [],
    image: 'storefront',
  },
  {
    title: 'Graphic Design',
    label: 'Graphic Design',
    paragraphs: [
      'Develop your vision with our team of experienced graphic designers. In addition to making sure that every one of your products is perfectly formatted and ready-to-print, we offer logo, web and marketing design. Enjoying this website? Click the link below to start a conversation with the people who created it.',
    ],
    products: [],
    image: 'colors2',
  },
];
