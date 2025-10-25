import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

interface Gadget {
  id: number;
  name: string;
  category: string;
  image: string;
  price: string;
  rating: number;
  specs: {
    processor?: string;
    ram?: string;
    storage?: string;
    display?: string;
    battery?: string;
    camera?: string;
  };
  description: string;
}

const gadgets: Gadget[] = [
  {
    id: 1,
    name: 'iPhone 15 Pro',
    category: 'Смартфоны',
    image: '/placeholder.svg',
    price: '99 990 ₽',
    rating: 4.8,
    specs: {
      processor: 'A17 Pro',
      ram: '8 ГБ',
      storage: '256 ГБ',
      display: '6.1" OLED',
      battery: '3274 мАч',
      camera: '48 Мп'
    },
    description: 'Флагман Apple с титановым корпусом и новым процессором'
  },
  {
    id: 2,
    name: 'Samsung Galaxy S24 Ultra',
    category: 'Смартфоны',
    image: '/placeholder.svg',
    price: '109 990 ₽',
    rating: 4.9,
    specs: {
      processor: 'Snapdragon 8 Gen 3',
      ram: '12 ГБ',
      storage: '512 ГБ',
      display: '6.8" AMOLED',
      battery: '5000 мАч',
      camera: '200 Мп'
    },
    description: 'Топовый Android с S Pen и впечатляющей камерой'
  },
  {
    id: 3,
    name: 'MacBook Air M3',
    category: 'Ноутбуки',
    image: '/placeholder.svg',
    price: '129 990 ₽',
    rating: 4.7,
    specs: {
      processor: 'Apple M3',
      ram: '16 ГБ',
      storage: '512 ГБ SSD',
      display: '13.6" Liquid Retina',
      battery: 'до 18 часов'
    },
    description: 'Тонкий и производительный ноутбук для работы и творчества'
  },
  {
    id: 4,
    name: 'Sony WH-1000XM5',
    category: 'Аудио',
    image: '/placeholder.svg',
    price: '29 990 ₽',
    rating: 4.8,
    specs: {
      battery: 'до 30 часов'
    },
    description: 'Премиальные наушники с лучшим шумоподавлением'
  },
  {
    id: 5,
    name: 'iPad Pro 12.9',
    category: 'Планшеты',
    image: '/placeholder.svg',
    price: '119 990 ₽',
    rating: 4.9,
    specs: {
      processor: 'Apple M2',
      ram: '16 ГБ',
      storage: '512 ГБ',
      display: '12.9" Liquid Retina XDR',
      battery: 'до 10 часов'
    },
    description: 'Мощный планшет для профессионалов'
  },
  {
    id: 6,
    name: 'Apple Watch Series 9',
    category: 'Носимые',
    image: '/placeholder.svg',
    price: '39 990 ₽',
    rating: 4.6,
    specs: {
      display: '1.9" OLED',
      battery: 'до 18 часов'
    },
    description: 'Умные часы с новым процессором и жестами'
  }
];

const Index = () => {
  const [selectedForCompare, setSelectedForCompare] = useState<number[]>([]);
  const [activeSection, setActiveSection] = useState('reviews');

  const toggleCompare = (id: number) => {
    if (selectedForCompare.includes(id)) {
      setSelectedForCompare(selectedForCompare.filter(gId => gId !== id));
    } else if (selectedForCompare.length < 3) {
      setSelectedForCompare([...selectedForCompare, id]);
    }
  };

  const selectedGadgets = gadgets.filter(g => selectedForCompare.includes(g.id));

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Smartphone" className="text-primary" size={28} />
            <h1 className="text-2xl font-bold">TechReview</h1>
          </div>
          
          <nav className="hidden md:flex items-center gap-6">
            <button 
              onClick={() => setActiveSection('reviews')}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                activeSection === 'reviews' ? 'text-primary' : 'text-muted-foreground'
              }`}
            >
              Обзоры
            </button>
            <button 
              onClick={() => setActiveSection('compare')}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                activeSection === 'compare' ? 'text-primary' : 'text-muted-foreground'
              }`}
            >
              Сравнения
            </button>
            <button className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
              Рейтинги
            </button>
            <button className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
              О проекте
            </button>
            <button className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
              Контакты
            </button>
          </nav>

          <Button variant="outline" size="sm" className="hidden md:flex">
            <Icon name="Search" size={16} className="mr-2" />
            Поиск
          </Button>
        </div>
      </header>

      {activeSection === 'reviews' && (
        <main className="container py-8 fade-in">
          <section className="mb-12">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 mb-6">
              <Card className="md:col-span-2 lg:col-span-2 bg-gradient-to-br from-primary/10 to-accent/5 border-primary/20">
                <CardHeader>
                  <Badge className="w-fit mb-2">Топ недели</Badge>
                  <CardTitle className="text-3xl">Samsung Galaxy S24 Ultra</CardTitle>
                  <CardDescription className="text-base">
                    Полный обзор флагмана с революционной камерой 200 Мп
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <Icon name="Star" size={20} className="fill-yellow-400 text-yellow-400" />
                      <span className="font-semibold">4.9</span>
                    </div>
                    <Button>Читать обзор</Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover-scale cursor-pointer">
                <CardHeader>
                  <Badge variant="secondary" className="w-fit mb-2">Новинка</Badge>
                  <CardTitle>MacBook Air M3</CardTitle>
                  <CardDescription>
                    Тестируем новый процессор Apple M3
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-1">
                    <Icon name="Star" size={18} className="fill-yellow-400 text-yellow-400" />
                    <span className="font-semibold text-sm">4.7</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          <section>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold">Все гаджеты</h2>
              {selectedForCompare.length > 0 && (
                <Button 
                  onClick={() => setActiveSection('compare')}
                  className="gap-2"
                >
                  <Icon name="GitCompare" size={18} />
                  Сравнить ({selectedForCompare.length})
                </Button>
              )}
            </div>

            <Tabs defaultValue="all" className="mb-6">
              <TabsList>
                <TabsTrigger value="all">Все</TabsTrigger>
                <TabsTrigger value="phones">Смартфоны</TabsTrigger>
                <TabsTrigger value="laptops">Ноутбуки</TabsTrigger>
                <TabsTrigger value="audio">Аудио</TabsTrigger>
                <TabsTrigger value="wearables">Носимые</TabsTrigger>
              </TabsList>

              <TabsContent value="all" className="mt-6">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {gadgets.map((gadget) => (
                    <Card key={gadget.id} className="hover-scale overflow-hidden group">
                      <div className="relative">
                        <div className="aspect-video bg-secondary flex items-center justify-center">
                          <Icon name="Smartphone" size={48} className="text-muted-foreground" />
                        </div>
                        <Badge className="absolute top-2 right-2">{gadget.category}</Badge>
                      </div>
                      
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <div>
                            <CardTitle className="text-lg">{gadget.name}</CardTitle>
                            <CardDescription className="mt-1">{gadget.description}</CardDescription>
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-1 mt-2">
                          <Icon name="Star" size={16} className="fill-yellow-400 text-yellow-400" />
                          <span className="font-semibold text-sm">{gadget.rating}</span>
                        </div>
                      </CardHeader>

                      <CardContent>
                        <div className="space-y-2 mb-4 text-sm text-muted-foreground">
                          {gadget.specs.processor && (
                            <div className="flex justify-between">
                              <span>Процессор:</span>
                              <span className="font-medium text-foreground">{gadget.specs.processor}</span>
                            </div>
                          )}
                          {gadget.specs.ram && (
                            <div className="flex justify-between">
                              <span>RAM:</span>
                              <span className="font-medium text-foreground">{gadget.specs.ram}</span>
                            </div>
                          )}
                          {gadget.specs.storage && (
                            <div className="flex justify-between">
                              <span>Память:</span>
                              <span className="font-medium text-foreground">{gadget.specs.storage}</span>
                            </div>
                          )}
                        </div>

                        <div className="flex items-center justify-between">
                          <span className="text-2xl font-bold text-primary">{gadget.price}</span>
                          <Button
                            variant={selectedForCompare.includes(gadget.id) ? "default" : "outline"}
                            size="sm"
                            onClick={() => toggleCompare(gadget.id)}
                            disabled={!selectedForCompare.includes(gadget.id) && selectedForCompare.length >= 3}
                          >
                            <Icon 
                              name={selectedForCompare.includes(gadget.id) ? "Check" : "Plus"} 
                              size={16} 
                              className="mr-1"
                            />
                            {selectedForCompare.includes(gadget.id) ? 'Выбрано' : 'Сравнить'}
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </section>
        </main>
      )}

      {activeSection === 'compare' && (
        <main className="container py-8 fade-in">
          <div className="mb-6">
            <Button 
              variant="ghost" 
              onClick={() => setActiveSection('reviews')}
              className="gap-2 mb-4"
            >
              <Icon name="ArrowLeft" size={18} />
              Назад к обзорам
            </Button>
            <h1 className="text-3xl font-bold mb-2">Сравнение устройств</h1>
            <p className="text-muted-foreground">
              Выбрано устройств: {selectedForCompare.length} из 3
            </p>
          </div>

          {selectedGadgets.length === 0 ? (
            <Card className="text-center py-12">
              <CardContent className="pt-6">
                <Icon name="GitCompare" size={64} className="mx-auto text-muted-foreground mb-4" />
                <h3 className="text-xl font-semibold mb-2">Выберите устройства для сравнения</h3>
                <p className="text-muted-foreground mb-4">
                  Вы можете выбрать до 3 гаджетов для детального сравнения характеристик
                </p>
                <Button onClick={() => setActiveSection('reviews')}>
                  Перейти к каталогу
                </Button>
              </CardContent>
            </Card>
          ) : (
            <div className="overflow-x-auto">
              <div className="min-w-[800px]">
                <div className="grid grid-cols-[200px_repeat(auto-fit,minmax(250px,1fr))] gap-4">
                  <div className="font-semibold text-muted-foreground"></div>
                  {selectedGadgets.map(gadget => (
                    <Card key={gadget.id} className="relative">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="absolute top-2 right-2 h-8 w-8"
                        onClick={() => toggleCompare(gadget.id)}
                      >
                        <Icon name="X" size={16} />
                      </Button>
                      <CardHeader className="pb-4">
                        <div className="aspect-square bg-secondary rounded-lg flex items-center justify-center mb-3">
                          <Icon name="Smartphone" size={48} className="text-muted-foreground" />
                        </div>
                        <CardTitle className="text-lg">{gadget.name}</CardTitle>
                        <div className="flex items-center gap-1 mt-2">
                          <Icon name="Star" size={16} className="fill-yellow-400 text-yellow-400" />
                          <span className="font-semibold text-sm">{gadget.rating}</span>
                        </div>
                        <p className="text-xl font-bold text-primary mt-2">{gadget.price}</p>
                      </CardHeader>
                    </Card>
                  ))}
                </div>

                <div className="mt-6 space-y-2">
                  {['processor', 'ram', 'storage', 'display', 'battery', 'camera'].map(spec => {
                    const hasSpec = selectedGadgets.some(g => g.specs[spec as keyof typeof g.specs]);
                    if (!hasSpec) return null;

                    const specNames: Record<string, string> = {
                      processor: 'Процессор',
                      ram: 'Оперативная память',
                      storage: 'Встроенная память',
                      display: 'Дисплей',
                      battery: 'Батарея',
                      camera: 'Камера'
                    };

                    return (
                      <div key={spec} className="grid grid-cols-[200px_repeat(auto-fit,minmax(250px,1fr))] gap-4 py-3 border-b">
                        <div className="font-medium text-sm text-muted-foreground">
                          {specNames[spec]}
                        </div>
                        {selectedGadgets.map(gadget => (
                          <div key={gadget.id} className="text-sm font-medium">
                            {gadget.specs[spec as keyof typeof gadget.specs] || '—'}
                          </div>
                        ))}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          )}
        </main>
      )}

      <footer className="border-t mt-16">
        <div className="container py-8">
          <div className="grid gap-8 md:grid-cols-4">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Smartphone" className="text-primary" size={24} />
                <span className="font-bold text-lg">TechReview</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Честные обзоры и сравнения новых гаджетов
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Разделы</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Обзоры</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Сравнения</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Рейтинги</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">О проекте</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">О нас</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Контакты</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Реклама</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Соцсети</h3>
              <div className="flex gap-3">
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <Icon name="Twitter" size={20} />
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <Icon name="Youtube" size={20} />
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <Icon name="Instagram" size={20} />
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
            © 2024 TechReview. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
