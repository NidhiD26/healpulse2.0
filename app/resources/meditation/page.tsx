"use client"

import React from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { Badge } from "@/components/ui/badge"
import {
  Play,
  Pause,
  SkipBack,
  SkipForward,
  Volume2,
  VolumeX,
  Music,
  Heart,
  Clock,
  Moon,
  Sun,
  Sparkles,
} from "lucide-react"
import { AudioProvider, useAudio } from "@/content/AudioContext"


interface MeditationTrack {
  id: number;
  title: string;
  description: string;
  duration: string;
  category: string;
  image: string;
  audioSrc?: string; 
}

interface MeditationCardProps {
  title: string;
  description: string;
  duration: string;
  icon: React.ReactNode;
  onPlay: () => void;
}

function MeditationContent() {
  
  const { 
    currentTracks, 
    currentTrack, 
    isPlaying, 
    playTrack, 
    pauseTracks, 
    setVolume 
  } = useAudio();

  const [volume, setVolumeState] = React.useState([70])
  const [isMuted, setIsMuted] = React.useState(false)
  const [selectedTrack, setSelectedTrack] = React.useState<MeditationTrack | null>(null)

  
  const meditationTracks: MeditationTrack[] = [
    {
      id: 1,
      title: "Guided Healing Meditation",
      description: "A gentle meditation focused on healing and recovery",
      duration: "15:20",
      category: "Guided",
      image: "/images/healing/guided healing meditation.jpg",
      audioSrc: "/meditation/Guided Healing Meditation.mp3"
    },
    {
      id: 2,
      title: "Deep Relaxation Music",
      description: "Calming sounds to help you relax and reduce stress",
      duration: "20:45",
      category: "Music",
      image: "/images/healing/sleep.jpeg",
      audioSrc: "/meditation/Deep Relaxation Music.mp3"
    },
    {
      id: 3,
      title: "Sleep Meditation",
      description: "Gentle guidance to help you fall asleep peacefully",
      duration: "30:10",
      category: "Guided",
      image: "/images/healing/sleep1.jpg",
      audioSrc: "/meditation/Sleep Meditation.mp3"
    },
    {
      id: 4,
      title: "Nature Sounds",
      description: "Peaceful forest and water sounds for relaxation",
      duration: "45:00",
      category: "Ambient",
      image: "/images/healing/nature.jpeg",
      audioSrc: "/meditation/Nature Sounds.mp3"
    },
    {
      id: 5,
      title: "Breathing Exercise",
      description: "Guided breathing techniques to reduce anxiety",
      duration: "10:15",
      category: "Guided",
      image: "/images/healing/breathe.jpg",
      audioSrc: "/meditation/Breathing Exercise.mp3"
    },
    {
      id: 6,
      title: "Healing Frequencies",
      description: "528Hz frequency music for healing and restoration",
      duration: "60:00",
      category: "Music",
      image: "/images/healing/heal.jpeg",
      audioSrc: "/meditation/Healing Frequencies.mp3"
    },
  ]

  
  const handlePlayTrack = (track: MeditationTrack) => {
    if (track.audioSrc) {
      setSelectedTrack(track)
      playTrack(track.audioSrc)
    }
  }

  
  const togglePlay = () => {
    if (isPlaying && selectedTrack?.audioSrc) {
      pauseTracks()
    } else if (selectedTrack?.audioSrc) {
      playTrack(selectedTrack.audioSrc)
    }
  }

  
  const handleVolumeChange = (newVolume: number[]) => {
    setVolumeState(newVolume)
    setVolume(newVolume[0] / 100)
    setIsMuted(newVolume[0] === 0)
  }

  
  const toggleMute = () => {
    if (isMuted) {
      setVolumeState([volume[0]])
      setVolume(volume[0] / 100)
      setIsMuted(false)
    } else {
      setVolume(0)
      setIsMuted(true)
    }
  }

  return (
    <div className="container py-8 md:py-12">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8 space-y-2">
          
          <h1 className="text-3xl font-bold">Meditation & Healing Music</h1>
          <p className="text-muted-foreground">
            Discover guided meditation and healing music to support your mental wellbeing during your cancer journey.
          </p>
        </div>

        <Tabs defaultValue="all" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="guided">Guided Meditation</TabsTrigger>
            <TabsTrigger value="music">Healing Music</TabsTrigger>
            <TabsTrigger value="sleep">Sleep & Relaxation</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="mt-6">
            <div className="grid gap-6">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold">Featured Tracks</h2>
                {/* <Button variant="ghost" size="sm">
                  View All
                </Button> */}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {meditationTracks.map((track) => (
                  <Card key={track.id} className="border-none shadow-md">
                    <CardHeader className="flex flex-row items-center gap-4 pb-2">
                      <div className="w-20 h-20 rounded-md overflow-hidden bg-muted flex-shrink-0">
                        <img
                          src={track.image}
                          alt={track.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <CardTitle className="text-base">{track.title}</CardTitle>
                        <CardDescription>{track.description}</CardDescription>
                        <div className="flex items-center gap-2 mt-1">
                          <Badge variant="outline" className="text-xs">
                            {track.category}
                          </Badge>
                          <span className="text-xs text-muted-foreground flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            {track.duration}
                          </span>
                        </div>
                      </div>
                    </CardHeader>
                    <CardFooter className="pt-0">
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="w-full" 
                        onClick={() => handlePlayTrack(track)}
                      >
                        <Play className="h-4 w-4 mr-2" />
                        Play
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>

              {/* Use Track component as an alternative:
              {meditationTracks.map((track) => 
                track.audioSrc && <Track key={track.id} track={track.audioSrc} />
              )} */}

              {selectedTrack && (
                <Card className="border-none shadow-md bg-primary/5 sticky bottom-0">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-md overflow-hidden bg-muted flex-shrink-0">
                        <img
                          src={selectedTrack.image}
                          alt={selectedTrack.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-medium text-sm">{selectedTrack.title}</h3>
                        <p className="text-xs text-muted-foreground">{selectedTrack.category}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button variant="ghost" size="icon">
                          <SkipBack className="h-4 w-4" />
                        </Button>
                        <Button variant="default" size="icon" onClick={togglePlay}>
                          {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                        </Button>
                        <Button variant="ghost" size="icon">
                          <SkipForward className="h-4 w-4" />
                        </Button>
                      </div>
                      <div className="flex items-center gap-2 w-32">
                        <Button variant="ghost" size="icon" onClick={toggleMute}>
                          {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
                        </Button>
                        <Slider 
                          value={volume} 
                          max={100} 
                          step={1} 
                          className="w-full" 
                          onValueChange={handleVolumeChange} 
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          </TabsContent>

          <TabsContent value="guided" className="mt-6">
            <Card className="border-none shadow-md mb-6">
              <CardHeader>
                <CardTitle>Guided meditation for Cancer Patients</CardTitle>
                <CardDescription>
                  Specialized meditation to support healing, reduce anxiety, and improve sleep
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-3">Healing meditation</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <MeditationCard
                        title="Body Scan for Healing"
                        description="A gentle meditation to connect with your body and promote healing"
                        duration="12:30"
                        icon={<Sparkles className="h-5 w-5 text-primary" />}
                        onPlay={() => playTrack("/meditation/Body Scan for Healing.mp3")}
                      />
                      <MeditationCard
                        title="Loving-Kindness Meditation"
                        description="Cultivate compassion for yourself and others during your journey"
                        duration="15:45"
                        icon={<Heart className="h-5 w-5 text-primary" />}
                        onPlay={() => playTrack("/meditation/Loving-Kindness Meditation.mp3")}
                      />
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-3">Sleep & Relaxation</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <MeditationCard
                        title="Sleep Preparation"
                        description="Gentle guidance to help you fall asleep peacefully"
                        duration="20:15"
                        icon={<Moon className="h-5 w-5 text-primary" />}
                        onPlay={() => playTrack("/meditation/Sleep Preparation.mp3")}
                      />
                      <MeditationCard
                        title="Deep Relaxation"
                        description="Release tension and find deep relaxation"
                        duration="18:30"
                        icon={<Sun className="h-5 w-5 text-primary" />}
                        onPlay={() => playTrack("/meditation/Deep Relaxation.mp3")}
                      />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="music" className="mt-6">
            <Card className="border-none shadow-md mb-6">
              <CardHeader>
                <CardTitle>Healing Music</CardTitle>
                <CardDescription>
                  Therapeutic sounds and music designed to promote relaxation and healing
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-3">Healing Frequencies</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <MeditationCard
                        title="528Hz Healing Frequency"
                        description="Known as the 'Miracle Tone' for transformation and healing"
                        duration="60:00"
                        icon={<Music className="h-5 w-5 text-primary" />}
                        onPlay={() => playTrack("/meditation/528Hz Healing Frequency.mp3")}
                      />
                      <MeditationCard
                        title="432Hz Relaxation"
                        description="Calming frequency that resonates with the heart chakra"
                        duration="45:00"
                        icon={<Music className="h-5 w-5 text-primary" />}
                        onPlay={() => playTrack("/meditation/432Hz Relaxation.mp3")}
                      />
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-3">Nature Sounds</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <MeditationCard
                        title="Forest Rainfall"
                        description="Gentle rain sounds in a peaceful forest setting"
                        duration="60:00"
                        icon={<Music className="h-5 w-5 text-primary" />}
                        onPlay={() => playTrack("/meditation/Forest Rainfall.mp3")}
                      />
                      <MeditationCard
                        title="Ocean Waves"
                        description="Rhythmic ocean waves for deep relaxation"
                        duration="60:00"
                        icon={<Music className="h-5 w-5 text-primary" />}
                        onPlay={() => playTrack("/meditation/Ocean Waves.mp3")}
                      />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="sleep" className="mt-6">
            <Card className="border-none shadow-md mb-6">
              <CardHeader>
                <CardTitle>Sleep & Relaxation</CardTitle>
                <CardDescription>meditation and sounds to help you relax and get better sleep</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-3">Sleep meditation</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <MeditationCard
                        title="Bedtime Relaxation"
                        description="Gentle guidance to prepare your body and mind for sleep"
                        duration="25:00"
                        icon={<Moon className="h-5 w-5 text-primary" />}
                        onPlay={() => playTrack("/meditation/Bedtime Relaxation.mp3")}
                      />
                      <MeditationCard
                        title="Sleep Story: Peaceful Garden"
                        description="A calming story to help you drift off to sleep"
                        duration="30:15"
                        icon={<Moon className="h-5 w-5 text-primary" />}
                        onPlay={() => playTrack("/meditation/Sleep Story Peaceful Garden.mp3")}
                      />
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-3">Relaxing Soundscapes</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <MeditationCard
                        title="Gentle Rain"
                        description="Soft rainfall sounds for relaxation and sleep"
                        duration="60:00"
                        icon={<Music className="h-5 w-5 text-primary" />}
                        onPlay={() => playTrack("/meditation/Gentle Rain.mp3")}
                      />
                      <MeditationCard
                        title="White Noise"
                        description="Consistent sound to mask disturbances and promote sleep"
                        duration="60:00"
                        icon={<Music className="h-5 w-5 text-primary" />}
                        onPlay={() => playTrack("/meditation/White Noise.mp3")}
                      />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <div className="mt-12 bg-muted/30 rounded-lg p-6">
          <div className="flex flex-col md:flex-row gap-6 items-start">
            <div className="md:w-1/3">
              <h2 className="text-xl font-semibold mb-2">Benefits of Meditation</h2>
              <p className="text-muted-foreground">
                Research has shown that meditation and music therapy can provide significant benefits for cancer
                patients:
              </p>
            </div>
            <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-background p-4 rounded-lg shadow-sm">
                <h3 className="font-medium mb-2 flex items-center gap-2">
                  <Heart className="h-5 w-5 text-primary" />
                  Reduced Anxiety
                </h3>
                <p className="text-sm text-muted-foreground">
                  Regular meditation practice can help reduce anxiety and stress during cancer treatment.
                </p>
              </div>
              <div className="bg-background p-4 rounded-lg shadow-sm">
                <h3 className="font-medium mb-2 flex items-center gap-2">
                  <Moon className="h-5 w-5 text-primary" />
                  Improved Sleep
                </h3>
                <p className="text-sm text-muted-foreground">
                  Meditation and calming music can help improve sleep quality and reduce insomnia.
                </p>
              </div>
              <div className="bg-background p-4 rounded-lg shadow-sm">
                <h3 className="font-medium mb-2 flex items-center gap-2">
                  <Sparkles className="h-5 w-5 text-primary" />
                  Pain Management
                </h3>
                <p className="text-sm text-muted-foreground">
                  Mindfulness meditation may help reduce the perception of pain and discomfort.
                </p>
              </div>
              <div className="bg-background p-4 rounded-lg shadow-sm">
                <h3 className="font-medium mb-2 flex items-center gap-2">
                  <Sun className="h-5 w-5 text-primary" />
                  Emotional Wellbeing
                </h3>
                <p className="text-sm text-muted-foreground">
                  Regular practice can improve mood and help manage depression during treatment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


function MeditationCard({ title, description, duration, icon, onPlay }: MeditationCardProps) {
  return (
    <Card className="border shadow-sm">
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            {icon}
            <CardTitle className="text-base">{title}</CardTitle>
          </div>
          <span className="text-xs text-muted-foreground flex items-center gap-1">
            <Clock className="h-3 w-3" />
            {duration}
          </span>
        </div>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardFooter className="pt-0">
        <Button variant="outline" size="sm" className="w-full" onClick={onPlay}>
          <Play className="h-4 w-4 mr-2" />
          Play
        </Button>
      </CardFooter>
    </Card>
  )
}


export default function MeditationPage() {
  return (
    <AudioProvider>
      <MeditationContent />
    </AudioProvider>
  )
}