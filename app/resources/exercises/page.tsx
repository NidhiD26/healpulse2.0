import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Activity, Wind, Heart, Clock, Download, Printer, Share2 } from "lucide-react"

export default function ExercisesPage() {
  return (
    <div className="container py-8 md:py-12">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8 space-y-2">
          <h1 className="text-3xl font-bold">Exercises & Relaxation Techniques</h1>
          <p className="text-muted-foreground">
            Gentle exercises and breathing techniques designed specifically for cancer patients.
          </p>
        </div>

        <Tabs defaultValue="breathing" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="breathing">Breathing Exercises</TabsTrigger>
            <TabsTrigger value="gentle">Gentle Movements</TabsTrigger>
            <TabsTrigger value="relaxation">Relaxation Techniques</TabsTrigger>
          </TabsList>

          <TabsContent value="breathing" className="mt-6">
            <Card className="border-none shadow-md mb-6">
              <CardHeader>
                <CardTitle>Breathing Exercises for Cancer Patients</CardTitle>
                <CardDescription>
                  Simple breathing techniques to reduce stress, improve sleep, and enhance overall wellbeing
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="bg-muted/30 p-6 rounded-lg">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-1/3">
                      <h3 className="text-lg font-semibold mb-2">Benefits of Breathing Exercises</h3>
                      <p className="text-muted-foreground">
                        Proper breathing techniques can help cancer patients in several ways:
                      </p>
                    </div>
                    <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="bg-background p-4 rounded-lg shadow-sm">
                        <h4 className="font-medium mb-2 flex items-center gap-2">
                          <Wind className="h-5 w-5 text-primary" />
                          Reduced Anxiety
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          Deep breathing activates the parasympathetic nervous system, helping to calm anxiety and
                          reduce stress.
                        </p>
                      </div>
                      <div className="bg-background p-4 rounded-lg shadow-sm">
                        <h4 className="font-medium mb-2 flex items-center gap-2">
                          <Heart className="h-5 w-5 text-primary" />
                          Better Sleep
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          Breathing exercises before bed can help improve sleep quality and reduce insomnia.
                        </p>
                      </div>
                      <div className="bg-background p-4 rounded-lg shadow-sm">
                        <h4 className="font-medium mb-2 flex items-center gap-2">
                          <Activity className="h-5 w-5 text-primary" />
                          Improved Energy
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          Proper breathing increases oxygen flow throughout the body, potentially improving energy
                          levels.
                        </p>
                      </div>
                      <div className="bg-background p-4 rounded-lg shadow-sm">
                        <h4 className="font-medium mb-2 flex items-center gap-2">
                          <Wind className="h-5 w-5 text-primary" />
                          Pain Management
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          Focused breathing can help manage pain and discomfort during and after treatment.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-4">Recommended Breathing Exercises</h3>

                  <div className="space-y-6">
                    <Card className="border shadow-sm">
                      <CardHeader>
                        <div className="flex justify-between items-start">
                          <div>
                            <CardTitle className="text-base">Diaphragmatic Breathing</CardTitle>
                            <CardDescription>Also known as "belly breathing"</CardDescription>
                          </div>
                          <Badge variant="outline" className="flex items-center gap-1">
                            <Clock className="h-3 w-3" />5 minutes
                          </Badge>
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <p className="text-muted-foreground">
                          This technique focuses on using your diaphragm properly while breathing, which can strengthen
                          the diaphragm, decrease oxygen demand, and slow your breathing rate.
                        </p>

                        <div className="space-y-2">
                          <h4 className="font-medium text-sm">How to practice:</h4>
                          <ol className="list-decimal pl-5 space-y-2 text-sm text-muted-foreground">
                            <li>Lie on your back with knees bent and a pillow under your head</li>
                            <li>Place one hand on your upper chest and the other on your belly below your ribcage</li>
                            <li>Breathe in slowly through your nose, feeling your stomach push against your hand</li>
                            <li>Keep the hand on your chest as still as possible</li>
                            <li>
                              Tighten your stomach muscles and let them fall inward as you exhale through pursed lips
                            </li>
                            <li>Repeat for 5-10 minutes, 3-4 times per day</li>
                          </ol>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="border shadow-sm">
                      <CardHeader>
                        <div className="flex justify-between items-start">
                          <div>
                            <CardTitle className="text-base">4-7-8 Breathing</CardTitle>
                            <CardDescription>A relaxing breath technique</CardDescription>
                          </div>
                          <Badge variant="outline" className="flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            2-3 minutes
                          </Badge>
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <p className="text-muted-foreground">
                          This technique acts as a natural tranquilizer for the nervous system and can help you fall
                          asleep, manage cravings, and control emotional responses.
                        </p>

                        <div className="space-y-2">
                          <h4 className="font-medium text-sm">How to practice:</h4>
                          <ol className="list-decimal pl-5 space-y-2 text-sm text-muted-foreground">
                            <li>Sit or lie in a comfortable position</li>
                            <li>Place the tip of your tongue against the ridge behind your upper front teeth</li>
                            <li>Exhale completely through your mouth, making a whoosh sound</li>
                            <li>Close your mouth and inhale quietly through your nose to a count of 4</li>
                            <li>Hold your breath for a count of 7</li>
                            <li>Exhale completely through your mouth to a count of 8, making a whoosh sound</li>
                            <li>Repeat the cycle 3-4 times</li>
                          </ol>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="border shadow-sm">
                      <CardHeader>
                        <div className="flex justify-between items-start">
                          <div>
                            <CardTitle className="text-base">Box Breathing</CardTitle>
                            <CardDescription>A calming technique used by many professionals</CardDescription>
                          </div>
                          <Badge variant="outline" className="flex items-center gap-1">
                            <Clock className="h-3 w-3" />5 minutes
                          </Badge>
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <p className="text-muted-foreground">
                          Box breathing is a simple technique that can help you return to calm breathing during
                          stressful situations or anxiety.
                        </p>

                        <div className="space-y-2">
                          <h4 className="font-medium text-sm">How to practice:</h4>
                          <ol className="list-decimal pl-5 space-y-2 text-sm text-muted-foreground">
                            <li>Sit upright in a comfortable position</li>
                            <li>Exhale slowly, getting all the oxygen out of your lungs</li>
                            <li>Inhale slowly through your nose to a count of 4</li>
                            <li>Hold your breath for a count of 4</li>
                            <li>Exhale through your mouth for a count of 4</li>
                            <li>Hold your breath again for a count of 4</li>
                            <li>Repeat for at least 5 minutes</li>
                          </ol>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                {/* <div className="flex justify-end gap-2">
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
          </TabsContent>

          <TabsContent value="gentle" className="mt-6">
            <Card className="border-none shadow-md mb-6">
              <CardHeader>
                <CardTitle>Gentle Movement Exercises</CardTitle>
                <CardDescription>
                  Low-impact physical activities designed specifically for cancer patients
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="bg-muted/30 p-6 rounded-lg">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-1/3">
                      <h3 className="text-lg font-semibold mb-2">Benefits of Gentle Exercise</h3>
                      <p className="text-muted-foreground">
                        Even light activity during cancer treatment can provide significant benefits:
                      </p>
                    </div>
                    <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="bg-background p-4 rounded-lg shadow-sm">
                        <h4 className="font-medium mb-2 flex items-center gap-2">
                          <Activity className="h-5 w-5 text-primary" />
                          Reduced Fatigue
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          Regular gentle movement can help combat cancer-related fatigue and improve energy levels.
                        </p>
                      </div>
                      <div className="bg-background p-4 rounded-lg shadow-sm">
                        <h4 className="font-medium mb-2 flex items-center gap-2">
                          <Heart className="h-5 w-5 text-primary" />
                          Improved Mood
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          Physical activity releases endorphins that can help reduce depression and anxiety.
                        </p>
                      </div>
                      <div className="bg-background p-4 rounded-lg shadow-sm">
                        <h4 className="font-medium mb-2 flex items-center gap-2">
                          <Activity className="h-5 w-5 text-primary" />
                          Maintained Strength
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          Gentle exercises help maintain muscle mass and strength during treatment.
                        </p>
                      </div>
                      <div className="bg-background p-4 rounded-lg shadow-sm">
                        <h4 className="font-medium mb-2 flex items-center gap-2">
                          <Heart className="h-5 w-5 text-primary" />
                          Better Sleep
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          Regular activity can improve sleep quality and help establish healthy sleep patterns.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold">Recommended Exercises</h3>
                    <Badge className="bg-accent text-accent-foreground">
                      Always consult your healthcare team before starting any exercise program
                    </Badge>
                  </div>

                  <div className="space-y-6">
                    <Card className="border shadow-sm">
                      <CardHeader>
                        <div className="flex justify-between items-start">
                          <div>
                            <CardTitle className="text-base">Seated Stretches</CardTitle>
                            <CardDescription>Gentle stretches you can do while sitting</CardDescription>
                          </div>
                          <Badge variant="outline" className="flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            5-10 minutes
                          </Badge>
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <p className="text-muted-foreground">
                          These stretches can be done from a chair or wheelchair and help maintain flexibility and
                          reduce stiffness.
                        </p>

                        <div className="space-y-4">
                          <div>
                            <h4 className="font-medium text-sm mb-2">Neck Stretch:</h4>
                            <ol className="list-decimal pl-5 space-y-1 text-sm text-muted-foreground">
                              <li>Sit up straight with shoulders relaxed</li>
                              <li>Gently tilt your head to the right, bringing your ear toward your shoulder</li>
                              <li>Hold for 15-30 seconds, feeling the stretch along the left side of your neck</li>
                              <li>Return to center and repeat on the left side</li>
                              <li>Repeat 2-3 times on each side</li>
                            </ol>
                          </div>

                          <div>
                            <h4 className="font-medium text-sm mb-2">Shoulder Rolls:</h4>
                            <ol className="list-decimal pl-5 space-y-1 text-sm text-muted-foreground">
                              <li>Sit up straight with arms relaxed at your sides</li>
                              <li>Slowly roll your shoulders forward in a circular motion 5 times</li>
                              <li>Then roll your shoulders backward in a circular motion 5 times</li>
                              <li>Repeat 2-3 sets</li>
                            </ol>
                          </div>

                          <div>
                            <h4 className="font-medium text-sm mb-2">Ankle Circles:</h4>
                            <ol className="list-decimal pl-5 space-y-1 text-sm text-muted-foreground">
                              <li>Sit with your feet flat on the floor</li>
                              <li>Lift your right foot slightly off the floor</li>
                              <li>Rotate your ankle in a circular motion 5 times clockwise</li>
                              <li>Rotate 5 times counterclockwise</li>
                              <li>Repeat with the left foot</li>
                              <li>Do 2-3 sets</li>
                            </ol>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="border shadow-sm">
                      <CardHeader>
                        <div className="flex justify-between items-start">
                          <div>
                            <CardTitle className="text-base">Gentle Walking</CardTitle>
                            <CardDescription>A simple but effective exercise</CardDescription>
                          </div>
                          <Badge variant="outline" className="flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            10-15 minutes
                          </Badge>
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <p className="text-muted-foreground">
                          Walking is one of the safest and most effective exercises during cancer treatment. Start with
                          short distances and gradually increase as tolerated.
                        </p>

                        <div className="space-y-2">
                          <h4 className="font-medium text-sm">Guidelines:</h4>
                          <ul className="list-disc pl-5 space-y-2 text-sm text-muted-foreground">
                            <li>Start with 5-10 minutes of walking at a comfortable pace</li>
                            <li>Use supportive, comfortable shoes</li>
                            <li>Walk on level surfaces initially</li>
                            <li>Gradually increase duration as tolerated, aiming for 15-30 minutes</li>
                            <li>Consider walking indoors (like in a mall) during extreme weather</li>
                            <li>Use a walking aid if needed for balance or support</li>
                            <li>Stop if you experience dizziness, chest pain, or unusual shortness of breath</li>
                          </ul>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="border shadow-sm">
                      <CardHeader>
                        <div className="flex justify-between items-start">
                          <div>
                            <CardTitle className="text-base">Chair Yoga</CardTitle>
                            <CardDescription>Modified yoga poses done from a seated position</CardDescription>
                          </div>
                          <Badge variant="outline" className="flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            10-20 minutes
                          </Badge>
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <p className="text-muted-foreground">
                          Chair yoga adapts traditional yoga poses so they can be done while seated, making it
                          accessible for those with limited mobility or energy.
                        </p>

                        <div className="space-y-4">
                          <div>
                            <h4 className="font-medium text-sm mb-2">Seated Mountain Pose:</h4>
                            <ol className="list-decimal pl-5 space-y-1 text-sm text-muted-foreground">
                              <li>Sit toward the front of your chair with feet flat on the floor</li>
                              <li>Sit up tall, lengthening your spine</li>
                              <li>Roll your shoulders back and down</li>
                              <li>Rest your hands on your thighs</li>
                              <li>Take deep breaths, focusing on good posture</li>
                              <li>Hold for 30-60 seconds</li>
                            </ol>
                          </div>

                          <div>
                            <h4 className="font-medium text-sm mb-2">Seated Cat-Cow Stretch:</h4>
                            <ol className="list-decimal pl-5 space-y-1 text-sm text-muted-foreground">
                              <li>Sit toward the front of your chair with feet flat on the floor</li>
                              <li>Place your hands on your knees</li>
                              <li>As you inhale, arch your back and look up (cow pose)</li>
                              <li>As you exhale, round your spine and bring your chin to your chest (cat pose)</li>
                              <li>Repeat 5-10 times, moving with your breath</li>
                            </ol>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="relaxation" className="mt-6">
            <Card className="border-none shadow-md mb-6">
              <CardHeader>
                <CardTitle>Relaxation Techniques</CardTitle>
                <CardDescription>Methods to reduce stress and promote healing during cancer treatment</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="bg-muted/30 p-6 rounded-lg">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-1/3">
                      <h3 className="text-lg font-semibold mb-2">Benefits of Relaxation</h3>
                      <p className="text-muted-foreground">
                        Regular relaxation practice can provide numerous benefits during cancer treatment:
                      </p>
                    </div>
                    <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="bg-background p-4 rounded-lg shadow-sm">
                        <h4 className="font-medium mb-2 flex items-center gap-2">
                          <Wind className="h-5 w-5 text-primary" />
                          Stress Reduction
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          Relaxation techniques can lower stress hormones and help manage anxiety during treatment.
                        </p>
                      </div>
                      <div className="bg-background p-4 rounded-lg shadow-sm">
                        <h4 className="font-medium mb-2 flex items-center gap-2">
                          <Heart className="h-5 w-5 text-primary" />
                          Improved Sleep
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          Regular relaxation practice can help address insomnia and improve sleep quality.
                        </p>
                      </div>
                      <div className="bg-background p-4 rounded-lg shadow-sm">
                        <h4 className="font-medium mb-2 flex items-center gap-2">
                          <Activity className="h-5 w-5 text-primary" />
                          Pain Management
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          Relaxation can reduce muscle tension and help manage pain during cancer treatment.
                        </p>
                      </div>
                      <div className="bg-background p-4 rounded-lg shadow-sm">
                        <h4 className="font-medium mb-2 flex items-center gap-2">
                          <Heart className="h-5 w-5 text-primary" />
                          Emotional Wellbeing
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          Regular practice can improve mood and help manage depression during treatment.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-4">Recommended Relaxation Techniques</h3>

                  <div className="space-y-6">
                    <Card className="border shadow-sm">
                      <CardHeader>
                        <div className="flex justify-between items-start">
                          <div>
                            <CardTitle className="text-base">Progressive Muscle Relaxation</CardTitle>
                            <CardDescription>Systematically tensing and relaxing muscle groups</CardDescription>
                          </div>
                          <Badge variant="outline" className="flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            15 minutes
                          </Badge>
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <p className="text-muted-foreground">
                          This technique involves tensing and then releasing each muscle group in your body, helping you
                          recognize and reduce muscle tension.
                        </p>

                        <div className="space-y-2">
                          <h4 className="font-medium text-sm">How to practice:</h4>
                          <ol className="list-decimal pl-5 space-y-2 text-sm text-muted-foreground">
                            <li>Find a quiet, comfortable place to sit or lie down</li>
                            <li>Take a few deep breaths to begin</li>
                            <li>
                              Start with your feet: tense the muscles in your feet by curling your toes for 5 seconds
                            </li>
                            <li>Release the tension and notice how your muscles feel when relaxed</li>
                            <li>
                              Work your way up through your body: calves, thighs, abdomen, hands, arms, shoulders, neck,
                              and face
                            </li>
                            <li>For each muscle group, tense for 5 seconds, then relax for 30 seconds</li>
                            <li>Notice the difference between tension and relaxation</li>
                          </ol>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="border shadow-sm">
                      <CardHeader>
                        <div className="flex justify-between items-start">
                          <div>
                            <CardTitle className="text-base">Body Scan Meditation</CardTitle>
                            <CardDescription>A mindful awareness of each part of your body</CardDescription>
                          </div>
                          <Badge variant="outline" className="flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            10-20 minutes
                          </Badge>
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <p className="text-muted-foreground">
                          This practice involves bringing attention to each part of your body sequentially, noticing
                          sensations without judgment.
                        </p>

                        <div className="space-y-2">
                          <h4 className="font-medium text-sm">How to practice:</h4>
                          <ol className="list-decimal pl-5 space-y-2 text-sm text-muted-foreground">
                            <li>Lie down in a comfortable position</li>
                            <li>Close your eyes and take several deep breaths</li>
                            <li>Bring your attention to your feet, noticing any sensations</li>
                            <li>
                              Gradually move your attention up through your body: legs, hips, abdomen, chest, back,
                              hands, arms, shoulders, neck, and head
                            </li>
                            <li>For each area, spend about 20-30 seconds simply noticing sensations</li>
                            <li>
                              If you notice pain or discomfort, acknowledge it without judgment and visualize sending
                              your breath to that area
                            </li>
                            <li>Complete the practice by becoming aware of your entire body as a whole</li>
                          </ol>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="border shadow-sm">
                      <CardHeader>
                        <div className="flex justify-between items-start">
                          <div>
                            <CardTitle className="text-base">Guided Imagery</CardTitle>
                            <CardDescription>Using imagination to promote relaxation and healing</CardDescription>
                          </div>
                          <Badge variant="outline" className="flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            10-15 minutes
                          </Badge>
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <p className="text-muted-foreground">
                          Guided imagery uses your imagination to create peaceful scenes or visualize healing processes
                          in your body.
                        </p>

                        <div className="space-y-2">
                          <h4 className="font-medium text-sm">How to practice:</h4>
                          <ol className="list-decimal pl-5 space-y-2 text-sm text-muted-foreground">
                            <li>Find a quiet place where you won't be disturbed</li>
                            <li>Sit or lie down comfortably and close your eyes</li>
                            <li>Take several deep breaths to relax</li>
                            <li>
                              Imagine a peaceful place that feels safe and calming (like a beach, forest, or garden)
                            </li>
                            <li>Use all your senses: What do you see? Hear? Smell? Feel?</li>
                            <li>Spend time exploring this peaceful place in your mind</li>
                            <li>You can also visualize your treatment working effectively or your body healing</li>
                            <li>When ready, slowly bring your awareness back to the present</li>
                          </ol>
                        </div>

                        <div className="bg-muted/30 p-3 rounded-md text-sm">
                          <p className="font-medium mb-1">Sample Healing Visualization:</p>
                          <p className="text-muted-foreground">
                            Imagine your treatment as a healing light moving through your body, finding and dissolving
                            cancer cells. Visualize your immune system as strong defenders, supporting your body's
                            natural healing abilities.
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                {/* <div className="flex justify-end gap-2">
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
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}