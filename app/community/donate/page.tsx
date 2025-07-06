import Image from "next/image"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { Scissors, Heart, MapPin, Calendar, ArrowRight, CheckCircle2 } from "lucide-react"

export default function DonatePage() {
  return (
    <div className="container py-8 md:py-12">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8 space-y-2">
          <h1 className="text-3xl font-bold">Donate Hair for Cancer Patients</h1>
          <p className="text-muted-foreground">
            Learn how to donate your hair to help create wigs for cancer patients experiencing hair loss.
          </p>
        </div>

        <Tabs defaultValue="how-to" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="how-to">How to Donate</TabsTrigger>
            <TabsTrigger value="organizations">Organizations</TabsTrigger>
            <TabsTrigger value="stories">Donor Stories</TabsTrigger>
          </TabsList>

          <TabsContent value="how-to" className="mt-6">
            <Card className="border-none shadow-md mb-6">
              <CardHeader>
                <CardTitle>Hair Donation Guidelines</CardTitle>
                <CardDescription>Follow these steps to donate your hair for cancer patients</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="relative rounded-lg overflow-hidden">
                    <Image
                      src="/images/hair1.png"
                      alt="Hair donation"
                      width={400}
                      height={300}
                      className="w-full h-auto object-cover"
                    />
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="bg-primary/10 p-2 rounded-full">
                        <CheckCircle2 className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold">Hair Requirements</h3>
                        <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
                          <li>Minimum length: 8-12 inches (varies by organization)</li>
                          <li>Clean, dry hair in good condition</li>
                          <li>Can be colored if not chemically damaged</li>
                          <li>Cannot be bleached or permanently colored</li>
                          <li>Gray hair is accepted by some organizations</li>
                        </ul>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="bg-primary/10 p-2 rounded-full">
                        <Scissors className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold">Cutting Instructions</h3>
                        <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
                          <li>Wash and dry your hair completely</li>
                          <li>Tie hair in multiple ponytails for more accurate cutting</li>
                          <li>Secure with elastic bands above and below cut line</li>
                          <li>Cut above the top elastic band</li>
                          <li>Keep elastics on the ponytails you're donating</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Step-by-Step Donation Process</h3>

                  <div className="grid gap-4 md:grid-cols-3">
                    <Card className="border shadow-sm">
                      <CardHeader className="pb-2">
                        <div className="flex items-center gap-2">
                          <Badge className="bg-primary text-primary-foreground">1</Badge>
                          <CardTitle className="text-base">Prepare Your Hair</CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent className="pt-0 text-sm text-muted-foreground">
                        <p>
                          Grow your hair to the minimum required length. Ensure it's healthy and meets the
                          organization's requirements.
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="border shadow-sm">
                      <CardHeader className="pb-2">
                        <div className="flex items-center gap-2">
                          <Badge className="bg-primary text-primary-foreground">2</Badge>
                          <CardTitle className="text-base">Cut & Package</CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent className="pt-0 text-sm text-muted-foreground">
                        <p>
                          Follow the cutting instructions carefully. Place the ponytail(s) in a clean, sealable plastic
                          bag.
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="border shadow-sm">
                      <CardHeader className="pb-2">
                        <div className="flex items-center gap-2">
                          <Badge className="bg-primary text-primary-foreground">3</Badge>
                          <CardTitle className="text-base">Mail Your Donation</CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent className="pt-0 text-sm text-muted-foreground">
                        <p>
                          Complete the donation form and mail your hair to your chosen organization following their
                          shipping instructions.
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                <div className="bg-muted/30 p-6 rounded-lg">
                  <div className="flex items-center gap-3 mb-4">
                    <Heart className="h-6 w-6 text-primary" />
                    <h3 className="text-lg font-semibold">Why Your Donation Matters</h3>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    Hair loss during cancer treatment can be emotionally devastating. By donating your hair, you're
                    helping to restore confidence and dignity to someone during a difficult time in their life.
                  </p>
                  <p className="text-muted-foreground">
                    A natural hair wig can cost $2,000-$5,000, which many patients cannot afford. Your donation helps
                    provide these wigs at little or no cost to those who need them.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-4">Frequently Asked Questions</h3>

                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                      <AccordionTrigger>Can I donate colored or permed hair?</AccordionTrigger>
                      <AccordionContent>
                        <p className="text-muted-foreground">
                          Most organizations accept colored or permed hair as long as it's not overly damaged. However,
                          they typically do not accept bleached hair or hair with permanent color treatments that have
                          significantly altered the hair structure.
                        </p>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-2">
                      <AccordionTrigger>How long does my hair need to be?</AccordionTrigger>
                      <AccordionContent>
                        <p className="text-muted-foreground">
                          Length requirements vary by organization, but most require a minimum of 8-12 inches. Some
                          organizations accept shorter donations for children's wigs or for other purposes. Always check
                          the specific requirements of your chosen organization before cutting.
                        </p>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-3">
                      <AccordionTrigger>Can I donate gray hair?</AccordionTrigger>
                      <AccordionContent>
                        <p className="text-muted-foreground">
                          Some organizations accept gray hair, while others do not. Gray hair is sometimes used for
                          older recipients or mixed with other hair colors. Check with your specific organization to
                          confirm their policy on gray hair donations.
                        </p>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-4">
                      <AccordionTrigger>How long does it take to make a wig?</AccordionTrigger>
                      <AccordionContent>
                        <p className="text-muted-foreground">
                          Creating a custom wig is a labor-intensive process that typically takes 4-6 months. It
                          requires 6-10 ponytails to make one wig, as some hair is lost in the manufacturing process.
                          The hair must be sorted, processed, and hand-tied to create a natural-looking wig.
                        </p>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-5">
                      <AccordionTrigger>Can I specify who receives my hair donation?</AccordionTrigger>
                      <AccordionContent>
                        <p className="text-muted-foreground">
                          Most organizations do not allow donors to specify recipients. Hair donations are typically
                          pooled together to create wigs for those on waiting lists. However, some organizations may
                          have special programs for direct donations in certain circumstances.
                        </p>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="organizations" className="mt-6">
            <Card className="border-none shadow-md mb-6">
              <CardHeader>
                <CardTitle>Hair Donation Organizations</CardTitle>
                <CardDescription>
                  Reputable organizations that accept hair donations for cancer patients
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <Card className="border shadow-sm">
                    <CardHeader>
                      <CardTitle className="text-lg">Wigs for Kids</CardTitle>
                      <CardDescription>Providing hair replacement systems for children</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <h4 className="font-medium text-sm">Requirements:</h4>
                        <ul className="list-disc pl-5 text-sm text-muted-foreground">
                          <li>Minimum 12 inches of hair</li>
                          <li>Clean and dry</li>
                          <li>Can be colored but not chemically damaged</li>
                          <li>No more than 10% gray</li>
                        </ul>
                      </div>

                      <div className="flex items-center gap-2 text-sm">
                        <MapPin className="h-4 w-4 text-muted-foreground" />
                        <span className="text-muted-foreground">Rayat Research Center, Workspace 2, Sector 11, Kharghar, Navi Mumbai, Maharashtra 410210, Mumbai 410210</span>
                      </div>

                      <div className="bg-muted/30 p-3 rounded-md text-sm text-muted-foreground">
                        <p>
                          Wigs for Kids focuses on providing hair replacement systems for children who have lost their
                          hair due to medical conditions. Each wig is custom-made and valued at $1,800.
                        </p>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" className="w-full" asChild>
                        <a href="https://www.wigsforkids.org" target="_blank" rel="noopener noreferrer">
                          Visit Website
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </a>
                      </Button>
                    </CardFooter>
                  </Card>

                  <Card className="border shadow-sm">
                    <CardHeader>
                      <CardTitle className="text-lg">Children With Hair Loss</CardTitle>
                      <CardDescription>Free hair replacements for children and young adults</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <h4 className="font-medium text-sm">Requirements:</h4>
                        <ul className="list-disc pl-5 text-sm text-muted-foreground">
                          <li>Minimum 8 inches of hair</li>
                          <li>Clean and dry</li>
                          <li>Can be colored</li>
                          <li>Gray hair accepted</li>
                        </ul>
                      </div>

                      <div className="flex items-center gap-2 text-sm">
                        <MapPin className="h-4 w-4 text-muted-foreground" />
                        <span className="text-muted-foreground">Rayat Research Center, Workspace 2, Sector 11, Kharghar, Navi Mumbai, Maharashtra 410210, Mumbai 410210</span>
                      </div>

                      <div className="bg-muted/30 p-3 rounded-md text-sm text-muted-foreground">
                        <p>
                          Children With Hair Loss provides human hair replacements at no cost to children and young
                          adults facing medically-related hair loss. They accept shorter hair donations than many other
                          organizations.
                        </p>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" className="w-full" asChild>
                        <a href="https://www.childrenwithhairloss.us" target="_blank" rel="noopener noreferrer">
                          Visit Website
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </a>
                      </Button>
                    </CardFooter>
                  </Card>

                  <Card className="border shadow-sm">
                    <CardHeader>
                      <CardTitle className="text-lg">Hair We Share</CardTitle>
                      <CardDescription>Providing wigs to those suffering from medical hair loss</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <h4 className="font-medium text-sm">Requirements:</h4>
                        <ul className="list-disc pl-5 text-sm text-muted-foreground">
                          <li>Minimum 8 inches of hair</li>
                          <li>Clean and dry</li>
                          <li>Can be colored but not over-processed</li>
                          <li>Gray hair accepted</li>
                        </ul>
                      </div>

                      <div className="flex items-center gap-2 text-sm">
                        <MapPin className="h-4 w-4 text-muted-foreground" />
                        <span className="text-muted-foreground">
                          Rayat Research Center, Workspace 2, Sector 11, Kharghar, Navi Mumbai, Maharashtra 410210, Mumbai 410210
                        </span>
                      </div>

                      <div className="bg-muted/30 p-3 rounded-md text-sm text-muted-foreground">
                        <p>
                          Hair We Share creates and donates wigs to children and adults suffering from medical hair
                          loss. They have a "Ponytail Tracking System" that allows donors to track their hair donation
                          through the wig-making process.
                        </p>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" className="w-full" asChild>
                        <a href="https://hairweshare.org" target="_blank" rel="noopener noreferrer">
                          Visit Website
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </a>
                      </Button>
                    </CardFooter>
                  </Card>

                  <Card className="border shadow-sm">
                    <CardHeader>
                      <CardTitle className="text-lg">Locks of Love</CardTitle>
                      <CardDescription>Providing hairpieces to financially disadvantaged children</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <h4 className="font-medium text-sm">Requirements:</h4>
                        <ul className="list-disc pl-5 text-sm text-muted-foreground">
                          <li>Minimum 10 inches of hair</li>
                          <li>Clean and dry</li>
                          <li>Can be colored but not bleached</li>
                          <li>Gray hair accepted</li>
                        </ul>
                      </div>

                      <div className="flex items-center gap-2 text-sm">
                        <MapPin className="h-4 w-4 text-muted-foreground" />
                        <span className="text-muted-foreground">234 Southern Blvd, West Palm Beach, FL 33405</span>
                      </div>

                      <div className="bg-muted/30 p-3 rounded-md text-sm text-muted-foreground">
                        <p>
                          Locks of Love provides hairpieces to financially disadvantaged children under age 21 suffering
                          from long-term medical hair loss from any diagnosis.
                        </p>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" className="w-full" asChild>
                        <a href="https://locksoflove.org" target="_blank" rel="noopener noreferrer">
                          Visit Website
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </a>
                      </Button>
                    </CardFooter>
                  </Card>
                </div>

                <div className="bg-muted/30 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold mb-4">Choosing an Organization</h3>
                  <p className="text-muted-foreground mb-4">
                    When selecting an organization for your hair donation, consider these factors:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>
                      <span className="font-medium">Recipient focus:</span> Some organizations focus on children, while
                      others serve adults or both.
                    </li>
                    <li>
                      <span className="font-medium">Hair requirements:</span> Length, color, and treatment requirements
                      vary by organization.
                    </li>
                    <li>
                      <span className="font-medium">Financial model:</span> Some provide wigs for free, while others may
                      charge on a sliding scale.
                    </li>
                    <li>
                      <span className="font-medium">Transparency:</span> Research how the organization uses donations
                      and what percentage goes to their mission.
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="stories" className="mt-6">
            <Card className="border-none shadow-md mb-6">
              <CardHeader>
                <CardTitle>Donor Stories</CardTitle>
                <CardDescription>Inspiring stories from people who have donated their hair</CardDescription>
              </CardHeader>
              <CardContent className="space-y-8">
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="relative rounded-lg overflow-hidden">
                    <Image
                      src="/images/hair2.png"
                      alt="Hair donor before and after"
                      width={400}
                      height={300}
                      className="w-full h-auto object-cover"
                    />
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-semibold">Emma's Story</h3>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        <span>Donated: March 2023</span>
                      </div>
                    </div>

                    <p className="text-muted-foreground">
                      "After watching my mom go through cancer treatment and seeing how much her wig helped her feel
                      like herself, I knew I wanted to donate my hair. I grew it for over two years until it reached 14
                      inches.
                    </p>
                    <p className="text-muted-foreground">
                      The day I cut it was emotional but so rewarding. Knowing that my hair could help someone feel more
                      confident during their cancer journey means everything to me. I've already started growing it out
                      to donate again!"
                    </p>

                    <div className="bg-muted/30 p-3 rounded-md text-sm">
                      <p className="italic">
                        "If you're thinking about donating, just do it. Hair grows back, but the impact you make lasts
                        forever."
                      </p>
                    </div>
                  </div>
                </div>

                <div className="border-t pt-8">
                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="space-y-4 order-2 md:order-1">
                      <div>
                        <h3 className="text-lg font-semibold">Michael's Story</h3>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Calendar className="h-4 w-4" />
                          <span>Donated: November 2022</span>
                        </div>
                      </div>

                      <p className="text-muted-foreground">
                        "I never planned to grow my hair long, but during the pandemic, I couldn't get a haircut. When
                        it got really long, a friend suggested I donate it. I learned about children losing their hair
                        to cancer and decided to keep growing it.
                      </p>
                      <p className="text-muted-foreground">
                        As a guy, I faced some jokes about my long hair, but explaining why I was growing it usually
                        changed people's perspective. I donated 12 inches and it was one of the most meaningful things
                        I've ever done."
                      </p>

                      <div className="bg-muted/30 p-3 rounded-md text-sm">
                        <p className="italic">
                          "It's just hair to me, but for someone going through cancer treatment, it can mean getting
                          back a piece of their identity."
                        </p>
                      </div>
                    </div>

                    <div className="relative rounded-lg overflow-hidden order-1 md:order-2">
                      <Image
                        src="/images/hair3.png"
                        alt="Male hair donor before and after"
                        width={400}
                        height={300}
                        className="w-full h-auto object-cover"
                      />
                    </div>
                  </div>
                </div>

                <div className="border-t pt-8">
                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="relative rounded-lg overflow-hidden">
                      <Image
                        src="/images/hair4.png"
                        alt="Child hair donor"
                        width={400}
                        height={300}
                        className="w-full h-auto object-cover"
                      />
                    </div>

                    <div className="space-y-4">
                      <div>
                        <h3 className="text-lg font-semibold">Sophia's Story (Age 8)</h3>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Calendar className="h-4 w-4" />
                          <span>Donated: January 2023</span>
                        </div>
                      </div>

                      <p className="text-muted-foreground">
                        "Sophia's classmate was diagnosed with leukemia and lost her hair during treatment. After seeing
                        how sad her friend was about losing her hair, Sophia decided she wanted to help.
                      </p>
                      <p className="text-muted-foreground">
                        She spent a year growing her hair until it was long enough to donate. On her 8th birthday,
                        instead of presents, she asked for donations to a childhood cancer organization and cut her hair
                        to donate 10 inches."
                      </p>

                      <div className="bg-muted/30 p-3 rounded-md text-sm">
                        <p className="italic">
                          "I wanted my friend to know she's not alone. Now someone else can have pretty hair while
                          theirs is growing back." - Sophia
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* <div className="bg-muted/30 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                    <Heart className="h-5 w-5 text-primary" />
                    Share Your Story
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Have you donated your hair? We'd love to hear about your experience and feature your story to
                    inspire others.
                  </p>
                  <Button>Submit Your Story</Button>
                </div> */}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
