"use client"

import { useState } from "react"
import { Share2, Save, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ClimateApp() {
  const [place, setPlace] = useState("")
  const [issue, setIssue] = useState("")
  const [generatedImages, setGeneratedImages] = useState([
    { url: "/placeholder.svg?height=300&width=300", platform: "AI Platform 1" },
    { url: "/placeholder.svg?height=300&width=300", platform: "AI Platform 2" },
    { url: "/placeholder.svg?height=300&width=300", platform: "AI Platform 3" },
  ])
  const [selectedImage, setSelectedImage] = useState(null)

  const handleGenerate = () => {
    // Simulate AI image generation
    console.log("Generating images for:", place, issue)
  }

  const handleSave = (imageUrl: string) => {
    // Save image to gallery
    console.log("Saving image:", imageUrl)
  }

  const handleShare = (imageUrl: string) => {
    // Share image
    console.log("Sharing image:", imageUrl)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-green-800 mb-8 text-center">Climate Change Awareness</h1>

          {/* Input Section */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Generate Climate Impact Visualizations</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Input
                placeholder="Enter location"
                value={place}
                onChange={(e) => setPlace(e.target.value)}
                className="border-green-200 focus:border-green-500"
              />
              <Input
                placeholder="Describe climate issue"
                value={issue}
                onChange={(e) => setIssue(e.target.value)}
                className="border-green-200 focus:border-green-500"
              />
              <Button onClick={handleGenerate} className="w-full bg-green-600 hover:bg-green-700">
                Generate Visualizations
              </Button>
            </CardContent>
          </Card>

          {/* Generated Images Section */}
          <div className="grid md:grid-cols-3 gap-4 mb-8">
            {generatedImages.map((image, index) => (
              <Card key={index} className="overflow-hidden">
                <CardContent className="p-0">
                  <img
                    src={image.url || "/placeholder.svg"}
                    alt={`Generated by ${image.platform}`}
                    className="w-full h-48 object-cover"
                  />
                </CardContent>
                <CardFooter className="flex justify-between items-center p-4">
                  <span className="text-sm text-gray-600">{image.platform}</span>
                  <div className="flex gap-2">
                    <Button variant="outline" size="icon" onClick={() => handleSave(image.url)}>
                      <Save className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="icon" onClick={() => handleShare(image.url)}>
                      <Share2 className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="icon" onClick={() => setSelectedImage(index)}>
                      <Heart className="h-4 w-4" fill={selectedImage === index ? "red" : "none"} />
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>

          {/* Information Tabs */}
          <Tabs defaultValue="causes" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="causes">Causes</TabsTrigger>
              <TabsTrigger value="effects">Effects</TabsTrigger>
              <TabsTrigger value="solutions">Solutions</TabsTrigger>
            </TabsList>
            <TabsContent value="causes">
              <Card>
                <CardHeader>
                  <CardTitle>Causes of Climate Change</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Greenhouse gas emissions</li>
                    <li>Deforestation</li>
                    <li>Industrial activities</li>
                    <li>Transportation emissions</li>
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="effects">
              <Card>
                <CardHeader>
                  <CardTitle>Effects of Climate Change</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Rising global temperatures</li>
                    <li>Extreme weather events</li>
                    <li>Sea level rise</li>
                    <li>Loss of biodiversity</li>
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="solutions">
              <Card>
                <CardHeader>
                  <CardTitle>Solutions</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Renewable energy adoption</li>
                    <li>Sustainable transportation</li>
                    <li>Forest conservation</li>
                    <li>Reducing waste and recycling</li>
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  )
}

