import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Utensils, Download, Printer, Share2 } from "lucide-react"

export default function NutritionPage() {
  return (
    <div className="container py-8 md:py-12">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8 space-y-2">
          <h1 className="text-3xl font-bold">Nutrition Guide for Cancer Patients</h1>
          <p className="text-muted-foreground">
            Personalized nutrition recommendations to support your health during and after cancer treatment.
          </p>
        </div>

        <Tabs defaultValue="general" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="general">General</TabsTrigger>
            <TabsTrigger value="during">During Treatment</TabsTrigger>
            <TabsTrigger value="after">After Treatment</TabsTrigger>
            <TabsTrigger value="recipes">Recipes</TabsTrigger>
          </TabsList>

          <TabsContent value="general" className="mt-6">
            <Card className="border-none shadow-md mb-6">
              <CardHeader>
                <CardTitle>Nutrition Basics for Cancer Patients</CardTitle>
                <CardDescription>Understanding your nutritional needs during cancer treatment</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  Good nutrition is especially important for cancer patients. Eating the right kinds of foods before,
                  during, and after treatment can help you feel better and stay stronger. Here are some general
                  guidelines:
                </p>

                <div className="grid md:grid-cols-2 gap-4 mt-4">
                  <div className="bg-muted/30 p-4 rounded-lg">
                    <h3 className="font-semibold mb-2 flex items-center gap-2">
                      <Utensils className="h-5 w-5 text-primary" />
                      Focus on Protein
                    </h3>
                    <p className="text-muted-foreground">
                      Protein helps repair body tissue and maintain a healthy immune system. Good sources include lean
                      meats, fish, eggs, dairy, nuts, and legumes.
                    </p>
                  </div>

                  <div className="bg-muted/30 p-4 rounded-lg">
                    <h3 className="font-semibold mb-2 flex items-center gap-2">
                      <Utensils className="h-5 w-5 text-primary" />
                      Stay Hydrated
                    </h3>
                    <p className="text-muted-foreground">
                      Drink plenty of fluids to prevent dehydration, especially water. Aim for 8-10 cups of fluid per
                      day.
                    </p>
                  </div>

                  <div className="bg-muted/30 p-4 rounded-lg">
                    <h3 className="font-semibold mb-2 flex items-center gap-2">
                      <Utensils className="h-5 w-5 text-primary" />
                      Eat Nutrient-Dense Foods
                    </h3>
                    <p className="text-muted-foreground">
                      Choose fruits, vegetables, whole grains, and healthy fats to get the vitamins and minerals your
                      body needs.
                    </p>
                  </div>

                  <div className="bg-muted/30 p-4 rounded-lg">
                    <h3 className="font-semibold mb-2 flex items-center gap-2">
                      <Utensils className="h-5 w-5 text-primary" />
                      Small, Frequent Meals
                    </h3>
                    <p className="text-muted-foreground">
                      If you have a poor appetite, try eating smaller meals more frequently throughout the day rather
                      than three large meals.
                    </p>
                  </div>
                </div>

                {/* <div className="flex justify-end gap-2 mt-4">
                  <Button variant="outline" size="sm" className="gap-1">
                    <Printer className="h-4 w-4" />
                    Print
                  </Button>
                  <Button variant="outline" size="sm" className="gap-1">
                    <Download className="h-4 w-4" />
                    Download PDF
                  </Button>
                  <Button variant="outline" size="sm" className="gap-1">
                    <Share2 className="h-4 w-4" />
                    Share
                  </Button>
                </div> */}
              </CardContent>
            </Card>

            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>How does cancer affect nutritional needs?</AccordionTrigger>
                <AccordionContent>
                  <p className="mb-4">
                    Cancer and cancer treatments can affect your body's ability to tolerate certain foods and use
                    nutrients. The disease and treatments may also increase your body's need for specific nutrients.
                  </p>
                  <p>Common nutritional issues during cancer treatment include:</p>
                  <ul className="list-disc pl-6 space-y-2 mt-2 text-muted-foreground">
                    <li>Changes in metabolism</li>
                    <li>Poor appetite</li>
                    <li>Difficulty swallowing</li>
                    <li>Nausea and vomiting</li>
                    <li>Changes in taste or smell</li>
                    <li>Diarrhea or constipation</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger>Should I take supplements during treatment?</AccordionTrigger>
                <AccordionContent>
                  <p className="mb-4">
                    It's best to get your nutrients from food rather than supplements whenever possible. Some
                    supplements may interfere with cancer treatments.
                  </p>
                  <p className="mb-4">
                    Always talk to your healthcare team before taking any vitamins, minerals, or herbal supplements
                    during cancer treatment.
                  </p>
                  <div className="bg-primary/10 p-4 rounded-lg">
                    <p className="font-medium">Important Note:</p>
                    <p className="text-muted-foreground">
                      High-dose antioxidant supplements may interfere with radiation therapy and some chemotherapy
                      drugs. Discuss with your oncologist before starting any supplement regimen.
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger>What if I'm losing weight unintentionally?</AccordionTrigger>
                <AccordionContent>
                  <p className="mb-4">
                    Unintentional weight loss is common during cancer treatment. If you're losing weight, try these
                    strategies:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>Eat small, frequent meals throughout the day</li>
                    <li>Choose high-calorie, high-protein foods</li>
                    <li>Add extra calories to foods (butter, oils, cheese, nuts)</li>
                    <li>Drink smoothies or nutritional supplement drinks</li>
                    <li>Eat when your appetite is strongest</li>
                  </ul>
                  <p className="mt-4">
                    If weight loss continues, talk to your healthcare team about meeting with a registered dietitian who
                    specializes in oncology nutrition.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </TabsContent>

          <TabsContent value="during" className="mt-6">
            <Card className="border-none shadow-md mb-6">
              <CardHeader>
                <CardTitle>Nutrition During Treatment</CardTitle>
                <CardDescription>Managing side effects and maintaining nutrition during cancer therapy</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-3">Managing Common Side Effects</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <Card className="border shadow-sm">
                        <CardHeader className="pb-2">
                          <CardTitle className="text-base">Nausea and Vomiting</CardTitle>
                        </CardHeader>
                        <CardContent className="pt-0 text-sm">
                          <ul className="list-disc pl-4 space-y-1 text-muted-foreground">
                            <li>Eat small, frequent meals</li>
                            <li>Choose bland, easy-to-digest foods</li>
                            <li>Avoid strong smells</li>
                            <li>Try ginger tea or candies</li>
                            <li>Eat dry foods like crackers or toast</li>
                          </ul>
                        </CardContent>
                      </Card>

                      <Card className="border shadow-sm">
                        <CardHeader className="pb-2">
                          <CardTitle className="text-base">Taste Changes</CardTitle>
                        </CardHeader>
                        <CardContent className="pt-0 text-sm">
                          <ul className="list-disc pl-4 space-y-1 text-muted-foreground">
                            <li>Use plastic utensils for metallic taste</li>
                            <li>Try marinades and spices</li>
                            <li>Experiment with different foods</li>
                            <li>Use tart flavors to stimulate taste</li>
                            <li>Practice good oral hygiene</li>
                          </ul>
                        </CardContent>
                      </Card>

                      <Card className="border shadow-sm">
                        <CardHeader className="pb-2">
                          <CardTitle className="text-base">Fatigue</CardTitle>
                        </CardHeader>
                        <CardContent className="pt-0 text-sm">
                          <ul className="list-disc pl-4 space-y-1 text-muted-foreground">
                            <li>Keep easy-to-prepare foods on hand</li>
                            <li>Accept help with meal preparation</li>
                            <li>Eat protein-rich foods</li>
                            <li>Stay hydrated</li>
                            <li>Consider meal delivery services</li>
                          </ul>
                        </CardContent>
                      </Card>

                      <Card className="border shadow-sm">
                        <CardHeader className="pb-2">
                          <CardTitle className="text-base">Diarrhea</CardTitle>
                        </CardHeader>
                        <CardContent className="pt-0 text-sm">
                          <ul className="list-disc pl-4 space-y-1 text-muted-foreground">
                            <li>Choose low-fiber foods</li>
                            <li>Avoid greasy, spicy foods</li>
                            <li>Stay hydrated with clear liquids</li>
                            <li>Try the BRAT diet (bananas, rice, applesauce, toast)</li>
                            <li>Limit caffeine and alcohol</li>
                          </ul>
                        </CardContent>
                      </Card>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-3">Treatment-Specific Recommendations</h3>
                    <Tabs defaultValue="chemo">
                      <TabsList>
                        <TabsTrigger value="chemo">Chemotherapy</TabsTrigger>
                        <TabsTrigger value="radiation">Radiation</TabsTrigger>
                        <TabsTrigger value="surgery">Surgery</TabsTrigger>
                        <TabsTrigger value="immunotherapy">Immunotherapy</TabsTrigger>
                      </TabsList>
                      <TabsContent value="chemo" className="mt-4">
                        <div className="bg-muted/30 p-4 rounded-lg">
                          <h4 className="font-medium mb-2">Chemotherapy Nutrition Tips</h4>
                          <p className="text-muted-foreground mb-4">
                            Chemotherapy can affect your appetite, taste, and digestion. Here are specific
                            recommendations:
                          </p>
                          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                            <li>Eat a light meal before treatment</li>
                            <li>Stay well-hydrated before and after sessions</li>
                            <li>Keep easy snacks on hand for low-energy days</li>
                            <li>Eat your largest meal when you feel hungriest</li>
                            <li>Consider cold foods if hot food smells bother you</li>
                          </ul>
                        </div>
                      </TabsContent>
                      <TabsContent value="radiation" className="mt-4">
                        <div className="bg-muted/30 p-4 rounded-lg">
                          <h4 className="font-medium mb-2">Radiation Therapy Nutrition Tips</h4>
                          <p className="text-muted-foreground mb-4">
                            Nutrition needs during radiation depend on the area being treated:
                          </p>
                          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                            <li>For head and neck radiation: Soft, moist foods may be easier to swallow</li>
                            <li>For abdominal radiation: Low-fiber diet may help with digestive issues</li>
                            <li>Maintain adequate protein intake to help tissue repair</li>
                            <li>Stay well-hydrated to help your body recover</li>
                          </ul>
                        </div>
                      </TabsContent>
                      <TabsContent value="surgery" className="mt-4">
                        <div className="bg-muted/30 p-4 rounded-lg">
                          <h4 className="font-medium mb-2">Surgery Nutrition Tips</h4>
                          <p className="text-muted-foreground mb-4">
                            Proper nutrition before and after surgery can help with recovery:
                          </p>
                          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                            <li>Before surgery: Focus on protein and nutrient-dense foods</li>
                            <li>After surgery: Start with clear liquids as advised</li>
                            <li>Gradually advance to soft foods then regular diet</li>
                            <li>Extra protein helps with wound healing</li>
                            <li>Small, frequent meals may be easier to tolerate</li>
                          </ul>
                        </div>
                      </TabsContent>
                      <TabsContent value="immunotherapy" className="mt-4">
                        <div className="bg-muted/30 p-4 rounded-lg">
                          <h4 className="font-medium mb-2">Immunotherapy Nutrition Tips</h4>
                          <p className="text-muted-foreground mb-4">
                            Immunotherapy can cause different side effects than traditional treatments:
                          </p>
                          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                            <li>Stay well-hydrated to help manage side effects</li>
                            <li>For colitis: Low-fiber diet may be recommended</li>
                            <li>For thyroid issues: Monitor iodine intake</li>
                            <li>Maintain good nutrition to support immune function</li>
                            <li>Report any new digestive symptoms to your healthcare team</li>
                          </ul>
                        </div>
                      </TabsContent>
                    </Tabs>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="after" className="mt-6">
            <Card className="border-none shadow-md mb-6">
              <CardHeader>
                <CardTitle>Nutrition After Treatment</CardTitle>
                <CardDescription>Building a healthy eating plan for survivorship and recovery</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <p>
                    After cancer treatment, nutrition continues to play an important role in your recovery and overall
                    health. These guidelines can help you establish healthy eating habits for survivorship.
                  </p>

                  <div className="bg-muted/30 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold mb-4">Survivorship Nutrition Guidelines</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-medium mb-2 flex items-center gap-2">
                          <Badge className="bg-primary text-primary-foreground">1</Badge>
                          Plant-Based Diet
                        </h4>
                        <p className="text-muted-foreground">
                          Fill at least 2/3 of your plate with vegetables, fruits, whole grains, and beans. These foods
                          are rich in fiber, vitamins, minerals, and phytochemicals that support health.
                        </p>
                      </div>

                      <div>
                        <h4 className="font-medium mb-2 flex items-center gap-2">
                          <Badge className="bg-primary text-primary-foreground">2</Badge>
                          Limit Red and Processed Meats
                        </h4>
                        <p className="text-muted-foreground">
                          Choose fish, poultry, or plant proteins most often. If you eat red meat, limit to 3 servings
                          per week and avoid processed meats like bacon and sausage.
                        </p>
                      </div>

                      <div>
                        <h4 className="font-medium mb-2 flex items-center gap-2">
                          <Badge className="bg-primary text-primary-foreground">3</Badge>
                          Choose Healthy Fats
                        </h4>
                        <p className="text-muted-foreground">
                          Include sources of omega-3 fatty acids like fatty fish, walnuts, and flaxseeds. Use olive oil
                          instead of butter or margarine when possible.
                        </p>
                      </div>

                      <div>
                        <h4 className="font-medium mb-2 flex items-center gap-2">
                          <Badge className="bg-primary text-primary-foreground">4</Badge>
                          Limit Added Sugars
                        </h4>
                        <p className="text-muted-foreground">
                          Reduce intake of sugary drinks, desserts, and processed foods with added sugars. Choose fruit
                          for sweetness instead.
                        </p>
                      </div>

                      <div>
                        <h4 className="font-medium mb-2 flex items-center gap-2">
                          <Badge className="bg-primary text-primary-foreground">5</Badge>
                          Maintain a Healthy Weight
                        </h4>
                        <p className="text-muted-foreground">
                          If you need to gain weight after treatment, focus on nutrient-dense foods. If you need to lose
                          weight, make gradual changes to your diet and increase physical activity.
                        </p>
                      </div>

                      <div>
                        <h4 className="font-medium mb-2 flex items-center gap-2">
                          <Badge className="bg-primary text-primary-foreground">6</Badge>
                          Limit Alcohol
                        </h4>
                        <p className="text-muted-foreground">
                          If you drink alcohol, limit to 1 drink per day for women and 2 for men. Some cancer survivors
                          may be advised to avoid alcohol completely.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-3">Sample Meal Plan</h3>
                    <div className="border rounded-lg overflow-hidden">
                      <div className="grid grid-cols-3 divide-x">
                        <div className="p-4">
                          <h4 className="font-medium mb-2">Breakfast</h4>
                          <ul className="space-y-2 text-sm text-muted-foreground">
                            <li>Oatmeal with berries and walnuts</li>
                            <li>Greek yogurt with honey</li>
                            <li>Green tea or coffee</li>
                          </ul>
                        </div>
                        <div className="p-4">
                          <h4 className="font-medium mb-2">Lunch</h4>
                          <ul className="space-y-2 text-sm text-muted-foreground">
                            <li>Quinoa bowl with roasted vegetables</li>
                            <li>Grilled chicken or tofu</li>
                            <li>Olive oil and lemon dressing</li>
                            <li>Fresh fruit</li>
                          </ul>
                        </div>
                        <div className="p-4">
                          <h4 className="font-medium mb-2">Dinner</h4>
                          <ul className="space-y-2 text-sm text-muted-foreground">
                            <li>Baked salmon or lentils</li>
                            <li>Sweet potato</li>
                            <li>Steamed broccoli</li>
                            <li>Mixed green salad</li>
                          </ul>
                        </div>
                      </div>
                      <div className="bg-muted/30 p-4">
                        <h4 className="font-medium mb-2">Snacks</h4>
                        <div className="grid grid-cols-2 gap-4 text-sm text-muted-foreground">
                          <ul className="space-y-1">
                            <li>Apple with almond butter</li>
                            <li>Hummus with vegetable sticks</li>
                          </ul>
                          <ul className="space-y-1">
                            <li>Trail mix with nuts and dried fruit</li>
                            <li>Smoothie with protein powder</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="recipes" className="mt-6">
            <Card className="border-none shadow-md mb-6">
              <CardHeader>
                <CardTitle>Healthy Recipes for Cancer Patients</CardTitle>
                <CardDescription>Nutritious and easy-to-prepare meals to support your health</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <Card className="border shadow-sm">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-base">High-Protein Smoothie Bowl</CardTitle>
                      <CardDescription>Easy to digest, nutrient-dense breakfast</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <div>
                        <h4 className="text-sm font-medium">Ingredients:</h4>
                        <ul className="list-disc pl-5 text-sm text-muted-foreground">
                          <li>1 frozen banana</li>
                          <li>1/2 cup frozen berries</li>
                          <li>1 scoop protein powder</li>
                          <li>1/4 avocado</li>
                          <li>1 cup unsweetened almond milk</li>
                          <li>1 tbsp ground flaxseed</li>
                          <li>Toppings: granola, fresh fruit, nuts</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium">Instructions:</h4>
                        <ol className="list-decimal pl-5 text-sm text-muted-foreground">
                          <li>Blend all ingredients except toppings until smooth</li>
                          <li>Pour into a bowl</li>
                          <li>Add toppings and enjoy</li>
                        </ol>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border shadow-sm">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-base">Anti-Inflammatory Turmeric Soup</CardTitle>
                      <CardDescription>Soothing and nourishing</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <div>
                        <h4 className="text-sm font-medium">Ingredients:</h4>
                        <ul className="list-disc pl-5 text-sm text-muted-foreground">
                          <li>1 tbsp olive oil</li>
                          <li>1 onion, diced</li>
                          <li>2 carrots, diced</li>
                          <li>2 celery stalks, diced</li>
                          <li>2 garlic cloves, minced</li>
                          <li>1 tbsp fresh ginger, grated</li>
                          <li>1 tsp turmeric</li>
                          <li>4 cups vegetable broth</li>
                          <li>1 cup red lentils</li>
                          <li>Salt and pepper to taste</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium">Instructions:</h4>
                        <ol className="list-decimal pl-5 text-sm text-muted-foreground">
                          <li>Sauté onion, carrots, celery in olive oil</li>
                          <li>Add garlic, ginger, and turmeric</li>
                          <li>Add broth and lentils, simmer 20 minutes</li>
                          <li>Blend if desired for smoother texture</li>
                        </ol>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border shadow-sm">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-base">Gentle Digestion Chicken and Rice</CardTitle>
                      <CardDescription>Easy on the stomach, high in protein</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <div>
                        <h4 className="text-sm font-medium">Ingredients:</h4>
                        <ul className="list-disc pl-5 text-sm text-muted-foreground">
                          <li>2 boneless chicken breasts</li>
                          <li>1 cup white rice</li>
                          <li>2 cups low-sodium chicken broth</li>
                          <li>1 carrot, finely diced</li>
                          <li>1 zucchini, finely diced</li>
                          <li>1 tbsp olive oil</li>
                          <li>1 tsp dried thyme</li>
                          <li>Salt and pepper to taste</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium">Instructions:</h4>
                        <ol className="list-decimal pl-5 text-sm text-muted-foreground">
                          <li>Cook rice according to package instructions</li>
                          <li>Season chicken with thyme, salt, and pepper</li>
                          <li>Cook chicken in olive oil until done</li>
                          <li>Remove chicken, sauté vegetables in same pan</li>
                          <li>Slice chicken, serve over rice with vegetables</li>
                        </ol>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border shadow-sm">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-base">Omega-3 Rich Salmon Patties</CardTitle>
                      <CardDescription>Brain and heart-healthy protein</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <div>
                        <h4 className="text-sm font-medium">Ingredients:</h4>
                        <ul className="list-disc pl-5 text-sm text-muted-foreground">
                          <li>1 can (14.75 oz) salmon, drained</li>
                          <li>2 eggs, beaten</li>
                          <li>1/2 cup whole wheat breadcrumbs</li>
                          <li>1/4 cup Greek yogurt</li>
                          <li>2 tbsp fresh dill, chopped</li>
                          <li>1 tbsp lemon juice</li>
                          <li>1 tsp Dijon mustard</li>
                          <li>2 tbsp olive oil for cooking</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium">Instructions:</h4>
                        <ol className="list-decimal pl-5 text-sm text-muted-foreground">
                          <li>Mix all ingredients except olive oil</li>
                          <li>Form into 4 patties</li>
                          <li>Heat oil in pan over medium heat</li>
                          <li>Cook patties 3-4 minutes per side</li>
                          <li>Serve with a side salad or roasted vegetables</li>
                        </ol>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* <div className="mt-6 text-center">
                  <Button>View More Recipes</Button>
                </div> */}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
