import { Color } from './types';

export const BlogMockDataEn = {
  name: 'Forget Euro Summer—European Brands Say It’s New York or Nowhere',
  publishedAt: '2026-06-10',
  slug: 'forget-euro-summer-european-brands-say-it-s-new-york-or-nowhere',
  imageUrl:
    'https://cdn.sanity.io/images/g8wycn5o/production/c5b189c940a3e9ea3147227898568d5c7c4713ba-2717x3543.avif',
  imageAlt: 'Craig McDean',
  excerpt:
    'Most Americans dream of having a Euro summer—but for top European brands recently, it’s New York or nowhere.',
};

export const BlogMockDataKo = {
  name: '유럽 여름은 잊어라—유럽 브랜드들은 뉴욕 아니면 안 된다고 말해',
  publishedAt: '2026-06-10',
  slug: 'forget-euro-summer-european-brands-say-it-s-new-york-or-nowhere',
  imageUrl:
    'https://cdn.sanity.io/images/g8wycn5o/production/c5b189c940a3e9ea3147227898568d5c7c4713ba-2717x3543.avif',
  imageAlt: 'Craig McDean',
  excerpt:
    '대부분의 미국인들은 유럽에서 여름을 보내는 꿈을 꾸지만, 최근 최고의 유럽 브랜드들에게는 뉴욕 아니면 안 되는 상황이에요.',
};

export const HeroMockDataEn = {
  banners: [
    {
      title: 'Concrete Runaways // Summer 2026',
      text: 'Engineered for the heavy impact of street culture. Explore our latest heavyweight graphic tees, destroyed denim, and pro-spec Canadian Maple skate decks. Styled raw on the streets of Seoul and NYC.',
      media: {
        imageUrl:
          'https://cdn.sanity.io/images/g8wycn5o/production/0ef44b59bb8568000e9e67c52559ad5d0280be5f-1282x771.png',
        imageAlt: 'Hero 1',
      },
      callToAction: {
        label: 'Explore',
        href: '/',
      },
      position: 'left' as const,
    },
    {
      title: 'Welcome to the Drop Club Elite',
      text: 'Bypass the retail bots. Secure guaranteed server-side access to limited-edition collaborative drops, member-only visual lookbooks, and automatic 10% point multipliers on every transaction.',
      media: {
        imageUrl:
          'https://cdn.sanity.io/images/g8wycn5o/production/7625338651ff9dedac9249de0630401ffa25ae44-1203x548.png',
        imageAlt: 'Hero 2',
      },
      callToAction: {
        label: 'Explore',
        href: '/',
      },
      position: 'right' as const,
    },
  ],
};

export const HeroMockDataKo = {
  banners: [
    {
      title: '디지털 코어. 콘크리트 현실.',
      text: '온라인으로 구매하고, 매장을 방문해 현장을 느껴보세요. 강남, 소호, 제주 플래그십 허브의 실시간 재고를 확인하실 수 있습니다. 주문은 즉시 원장에 고정되며 2시간 이내에 수령 가능합니다.',
      media: {
        imageUrl:
          'https://cdn.sanity.io/images/g8wycn5o/production/990e54c8948d63b23d8216da047128490bd633d1-731x632.png',
        imageAlt: 'Hero 3',
      },
      callToAction: {
        label: '탐험하기',
        href: '/',
      },
      position: 'right' as const,
    },
    {
      title: '헤비웨이트 아머: 블랭크 시리즈',
      text: '브랜딩도, 소음도 없이. 오버사이즈 핏을 영원히 유지하도록 설계된 500GSM 초고밀도 커스텀 룹백 코튼 가먼츠. 변동 수수료 없는 고정 달러(USD) 및 원화(KRW) 가격으로 지금 만나보세요.',
      media: {
        imageUrl:
          'https://cdn.sanity.io/images/g8wycn5o/production/b11ad21845c2a91e590fb2dbd2e410c940f0f700-1406x744.png',
        imageAlt: 'Hero 4',
      },
      callToAction: {
        label: '탐험하기',
        href: '/',
      },
      position: 'left' as const,
    },
  ],
};

export const mockPhoto =
  'https://i.pinimg.com/736x/5b/8d/e5/5b8de5b0b63bfeba8c6c42879fa880d9.jpg';

export const mockShopTheLookEn = {
  title: 'Urban Edge: Street Style Outfit Inspo',
  media: {
    imageUrl:
      'https://cdn.sanity.io/images/g8wycn5o/production/92e862943354141d40d82e5403da1b82be96b04a-736x1308.jpg',
    imageAlt: 'woman standing',
  },
  hotspots: [
    {
      title:
        'SOJOS Polarized Sunglasses For Women Retro Rectangle Womens Sun Glasses Trendy Narrow Square 90s Shades SJ2232',
      price: 200,
      discountInPercent: 10,
      currency: 'usd' as const,
      colors: ['#8c5841'] as Color[],
      media: {
        imageUrl:
          'https://cdn.sanity.io/images/g8wycn5o/production/eb40826e70070b0e086cb3526ecb025ff8f576af-569x236.jpg',
        imageAlt: 'asdf;alskdjf',
      },
      x: 50,
      y: 14,
    },
    {
      title: 'Vince Camuto Silvertone Trio Chain Layered Necklace',
      price: 122,
      discountInPercent: 16,
      currency: 'usd' as const,
      colors: ['#b79649'] as Color[],
      media: {
        imageUrl:
          'https://cdn.sanity.io/images/g8wycn5o/production/329d98cdcf7f24359f93c09af94a02d4255bf5c2-607x535.jpg',
        imageAlt: 'asdf;alskdjf',
      },
      x: 50,
      y: 30,
    },
    {
      title:
        'Red Plaid Shirt Women Plaid Shirts for Women Oversized Button Down Long Sleeve Casual Tunic Blouse',
      price: 255,
      discountInPercent: 36,
      currency: 'usd' as const,
      colors: ['#935c58'] as Color[],
      media: {
        imageUrl:
          'https://cdn.sanity.io/images/g8wycn5o/production/723cb1cb7ecee20824659633e278804124c17f95-679x715.jpg',
        imageAlt: 'asdf;alskdjf',
      },
      x: 70,
      y: 45,
    },
    {
      title:
        'Womens Casual Wide Leg Barrel Pants Baggy Low Rise Relaxed Slouchy Trousers Large Patch Pockets Soft Pull On Bottoms',
      price: 55,
      discountInPercent: 8,
      currency: 'usd' as const,
      colors: ['#b79649'] as Color[],
      media: {
        imageUrl:
          'https://cdn.sanity.io/images/g8wycn5o/production/aa93dfe88c080d69a55114a44e0fadce8d2cd951-367x550.jpg',
        imageAlt: 'asdf;alskdjf',
      },
      x: 50,
      y: 60,
    },
    {
      title: 'Nike Air More Uptempo (Big Kid)',
      price: 300,
      discountInPercent: 22,
      currency: 'usd' as const,
      colors: ['#fc983b'] as Color[],
      media: {
        imageUrl:
          'https://cdn.sanity.io/images/g8wycn5o/production/754e715e9fab57a07d4c80d803cd2c930b92be1e-575x546.jpg',
        imageAlt: 'asdf;alskdjf',
      },
      x: 25,
      y: 90,
    },
  ],
};

export const mockShopTheLookKo = {
  title: '어반 엣지: 스트리트 스타일 코디 영감',
  media: {
    imageUrl:
      'https://cdn.sanity.io/images/g8wycn5o/production/92e862943354141d40d82e5403da1b82be96b04a-736x1308.jpg',
    imageAlt: 'woman standing',
  },
  hotspots: [
    {
      title:
        'SOJOS 여성용 편광 선글라스 레트로 사각형 여성 선글라스 트렌디한 좁은 스퀘어 90년대 스타일 SJ2232',
      price: 800000,
      discountInPercent: 10,
      currency: 'krw' as const,
      colors: ['#8c5841'] as Color[],
      media: {
        imageUrl:
          'https://cdn.sanity.io/images/g8wycn5o/production/eb40826e70070b0e086cb3526ecb025ff8f576af-569x236.jpg',
        imageAlt: 'asdf;alskdjf',
      },
      x: 50,
      y: 14,
    },
    {
      title: '빈스 카무토 실버톤 트리오 체인 레이어드 목걸이',
      price: 680000,
      discountInPercent: 16,
      currency: 'krw' as const,
      colors: ['#b79649'] as Color[],
      media: {
        imageUrl:
          'https://cdn.sanity.io/images/g8wycn5o/production/329d98cdcf7f24359f93c09af94a02d4255bf5c2-607x535.jpg',
        imageAlt: 'asdf;alskdjf',
      },
      x: 50,
      y: 30,
    },
    {
      title:
        '레드 체크 셔츠 여성용 체크 셔츠 오버사이즈 버튼 다운 긴 소매 캐주얼 튜닉 블라우스',
      price: 658000,
      discountInPercent: 36,
      currency: 'krw' as const,
      colors: ['#935c58'] as Color[],
      media: {
        imageUrl:
          'https://cdn.sanity.io/images/g8wycn5o/production/723cb1cb7ecee20824659633e278804124c17f95-679x715.jpg',
        imageAlt: 'asdf;alskdjf',
      },
      x: 70,
      y: 45,
    },
    {
      title:
        '여성용 캐주얼 와이드 레그 배럴 팬츠 루즈핏 로우라이즈 편안한 슬라우치 바지 큰 패치 포켓 소프트 풀온 하의',
      price: 550000,
      discountInPercent: 8,
      currency: 'usd' as const,
      colors: ['#b79649'] as Color[],
      media: {
        imageUrl:
          'https://cdn.sanity.io/images/g8wycn5o/production/aa93dfe88c080d69a55114a44e0fadce8d2cd951-367x550.jpg',
        imageAlt: 'asdf;alskdjf',
      },
      x: 50,
      y: 60,
    },
    {
      title: '나이키 에어 모어 업템포 (빅 키드)',
      price: 300,
      discountInPercent: 22,
      currency: 'usd' as const,
      colors: ['#fc983b'] as Color[],
      media: {
        imageUrl:
          'https://cdn.sanity.io/images/g8wycn5o/production/754e715e9fab57a07d4c80d803cd2c930b92be1e-575x546.jpg',
        imageAlt: 'asdf;alskdjf',
      },
      x: 25,
      y: 90,
    },
  ],
};

export const mockReviewCard = {
  fullName: 'Saya Misaki',
  role: 'blogger',
  media: {
    imageUrl: mockPhoto,
    imageAlt: 'asdf',
  },
  text: 'Engineered for the heavy impact of street culture. Explore our latest heavyweight graphic tees, destroyed denim, and pro-spec Canadian Maple skate decks. Styled raw on the streets of Seoul and NYC.',
};
