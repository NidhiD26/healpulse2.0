"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Send, Video, Phone, Mic, MicOff, VideoOff, User, Users } from "lucide-react"

export default function TalkPage() {
  const [activeTab, setActiveTab] = useState("text")
  const [message, setMessage] = useState("")
  const [messages, setMessages] = useState([])
  const [isConnected, setIsConnected] = useState(false)
  const [isSearching, setIsSearching] = useState(false)
  const [audioEnabled, setAudioEnabled] = useState(true)
  const [videoEnabled, setVideoEnabled] = useState(true)
  const messagesEndRef = useRef(null)

  // Sample messages for demonstration
  const sampleMessages = [
    {
      id: 1,
      sender: "system",
      content: "Welcome to HopeHub Talk. You are now connected with a supportive listener.",
      timestamp: new Date().toISOString(),
    },
    {
      id: 2,
      sender: "other",
      content: "Hi there! I'm here to listen if you'd like to talk about anything that's on your mind.",
      timestamp: new Date(Date.now() - 60000).toISOString(),
      user: {
        name: "Supportive Listener",
        avatar: "/placeholder.svg?height=40&width=40",
      },
    },
  ]

  useEffect(() => {
    // Simulate loading sample messages
    setMessages(sampleMessages)
  }, [])

  useEffect(() => {
    // Scroll to bottom when messages change
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  const handleSendMessage = (e) => {
    e.preventDefault()
    if (!message.trim()) return

    const newMessage = {
      id: messages.length + 1,
      sender: "self",
      content: message,
      timestamp: new Date().toISOString(),
      user: {
        name: "You",
        avatar: "/placeholder.svg?height=40&width=40",
      },
    }

    setMessages([...messages, newMessage])
    setMessage("")

    // Simulate response after a delay
    setTimeout(() => {
      const responseMessage = {
        id: messages.length + 2,
        sender: "other",
        content: "Thank you for sharing that. It takes courage to open up. How has that been affecting you lately?",
        timestamp: new Date().toISOString(),
        user: {
          name: "Supportive Listener",
          avatar: "/placeholder.svg?height=40&width=40",
        },
      }
      setMessages((prev) => [...prev, responseMessage])
    }, 3000)
  }

  const handleConnect = () => {
    setIsSearching(true)

    // Simulate finding a connection after a delay
    setTimeout(() => {
      setIsSearching(false)
      setIsConnected(true)
    }, 3000)
  }

  const handleDisconnect = () => {
    setIsConnected(false)
    // Reset messages to initial state
    setMessages(sampleMessages)
  }

  return (
    <div className="container py-8 md:py-12">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8 space-y-2">
          <h1 className="text-3xl font-bold">Talk to Someone</h1>
          <p className="text-muted-foreground">
            Connect with supportive listeners who understand what you're going through. All conversations are anonymous
            and confidential.
          </p>
        </div>

        <Tabs defaultValue="text" value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="text">Text Chat</TabsTrigger>
            <TabsTrigger value="video">Video Call</TabsTrigger>
          </TabsList>

          <TabsContent value="text" className="mt-4">
            <Card className="border-none shadow-md">
              <CardHeader className="bg-muted/30 border-b">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    {isConnected ? (
                      <>
                        <Avatar>
                          <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Listener" />
                          <AvatarFallback>SL</AvatarFallback>
                        </Avatar>
                        <div>
                          <CardTitle className="text-base">Supportive Listener</CardTitle>
                          <CardDescription>Cancer Survivor</CardDescription>
                        </div>
                      </>
                    ) : (
                      <div>
                        <CardTitle className="text-base">HopeHub Talk</CardTitle>
                        <CardDescription>Connect with a supportive listener</CardDescription>
                      </div>
                    )}
                  </div>
                  <Badge variant={isConnected ? "default" : "outline"} className="bg-accent text-accent-foreground">
                    {isConnected ? "Connected" : "Disconnected"}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="p-0">
                <div className="h-[400px] overflow-y-auto p-4">
                  {messages.map((msg) => (
                    <div
                      key={msg.id}
                      className={`flex mb-4 ${msg.sender === "self" ? "justify-end" : "justify-start"} ${msg.sender === "system" ? "justify-center" : ""}`}
                    >
                      {msg.sender === "system" ? (
                        <div className="bg-muted/50 py-2 px-4 rounded-md text-center text-sm text-muted-foreground">
                          {msg.content}
                        </div>
                      ) : (
                        <div
                          className={`flex ${msg.sender === "self" ? "flex-row-reverse" : "flex-row"} gap-2 max-w-[80%]`}
                        >
                          {msg.sender === "other" && (
                            <Avatar className="h-8 w-8">
                              <AvatarImage src={msg.user.avatar || "/placeholder.svg"} alt={msg.user.name} />
                              <AvatarFallback>{msg.user.name.charAt(0)}</AvatarFallback>
                            </Avatar>
                          )}
                          <div>
                            <div
                              className={`py-2 px-4 rounded-lg ${
                                msg.sender === "self" ? "bg-primary text-primary-foreground" : "bg-muted"
                              }`}
                            >
                              {msg.content}
                            </div>
                            <div
                              className={`text-xs text-muted-foreground mt-1 ${msg.sender === "self" ? "text-right" : ""}`}
                            >
                              {new Date(msg.timestamp).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                  <div ref={messagesEndRef} />
                </div>
              </CardContent>
              <CardFooter className="border-t p-4">
                {isConnected ? (
                  <form onSubmit={handleSendMessage} className="w-full flex gap-2">
                    <Input
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Type your message..."
                      className="flex-1"
                    />
                    <Button type="submit" size="icon">
                      <Send className="h-4 w-4" />
                    </Button>
                  </form>
                ) : (
                  <Button onClick={handleConnect} className="w-full" disabled={isSearching}>
                    {isSearching ? "Searching for a listener..." : "Connect with a Listener"}
                  </Button>
                )}
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="video" className="mt-4">
            <Card className="border-none shadow-md">
              <CardHeader className="bg-muted/30 border-b">
                <div className="flex justify-between items-center">
                  <div>
                    <CardTitle className="text-base">Video Support</CardTitle>
                    <CardDescription>Face-to-face conversations with supportive listeners</CardDescription>
                  </div>
                  <Badge variant={isConnected ? "default" : "outline"} className="bg-accent text-accent-foreground">
                    {isConnected ? "Connected" : "Disconnected"}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <div className="aspect-video bg-muted rounded-lg flex items-center justify-center mb-4">
                  {isConnected ? (
                    <div className="relative w-full h-full">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <User className="h-16 w-16 text-muted-foreground/50" />
                      </div>
                      <div className="absolute bottom-4 right-4 w-32 h-24 bg-background rounded-lg border shadow-md flex items-center justify-center">
                        <User className="h-8 w-8 text-muted-foreground/50" />
                      </div>
                    </div>
                  ) : (
                    <div className="text-center">
                      <Video className="h-12 w-12 mx-auto mb-2 text-muted-foreground/50" />
                      <p className="text-muted-foreground">Video preview will appear here</p>
                    </div>
                  )}
                </div>

                <div className="flex justify-center gap-2 mb-4">
                  <Button variant="outline" size="icon" onClick={() => setAudioEnabled(!audioEnabled)}>
                    {audioEnabled ? <Mic className="h-4 w-4" /> : <MicOff className="h-4 w-4" />}
                  </Button>
                  <Button variant="outline" size="icon" onClick={() => setVideoEnabled(!videoEnabled)}>
                    {videoEnabled ? <Video className="h-4 w-4" /> : <VideoOff className="h-4 w-4" />}
                  </Button>
                  {isConnected && (
                    <Button variant="destructive" size="icon" onClick={handleDisconnect}>
                      <Phone className="h-4 w-4" />
                    </Button>
                  )}
                </div>
              </CardContent>
              <CardFooter className="border-t p-4">
                {isConnected ? (
                  <Button variant="destructive" className="w-full" onClick={handleDisconnect}>
                    End Call
                  </Button>
                ) : (
                  <Button onClick={handleConnect} className="w-full" disabled={isSearching}>
                    {isSearching ? "Searching for a listener..." : "Start Video Call"}
                  </Button>
                )}
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>

        <div className="mt-8 bg-muted/30 rounded-lg p-6">
          <div className="flex items-start gap-4">
            <Users className="h-10 w-10 text-primary flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold text-lg mb-2">Community Guidelines</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>Be respectful and supportive of others in the community.</li>
                <li>Maintain confidentiality - what's shared here stays here.</li>
                <li>If you're in crisis, please contact emergency services or use our emergency resources.</li>
                <li>Report any inappropriate behavior to our moderation team.</li>
                <li>Remember that our listeners are volunteers who want to help, not medical professionals.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
