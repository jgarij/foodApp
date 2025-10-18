import { AppWindowIcon, CodeIcon } from "lucide-react"
import FAQSection from "@/components/FAQSection"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

const tabName = ["All", "Delivery", "Food and Meals"]

const tabData = {
  "All": [
    {
      ques: "Do you offer vegetarian options?",
      ans: "Yes, we have a variety of vegetarian rolls, salads, and bowls."
    },
    {
      ques: "Do you have vegan desserts?",
      ans: "Yes, we offer several vegan-friendly dessert options."
    },
    {
      ques: "Can I customize my order?",
      ans: "Absolutely! You can customize ingredients and portion sizes."
    }
  ],
  "Delivery": [
    {
      ques: "Do you deliver on weekends?",
      ans: "Yes, our delivery service is available every day from 10 AM to 10 PM."
    },
    {
      ques: "What is the delivery charge?",
      ans: "Delivery is free for orders above $50. Otherwise, a $5 fee applies."
    }
  ],
  "Food and Meals": [
    {
      ques: "Do you have gluten-free options?",
      ans: "Yes, we offer several gluten-free meals clearly labeled on our menu."
    }
  ]
};

export function TabsDemo() {
  return (
    <>
  
      <Tabs defaultValue={tabName[0]}>
        <TabsList className="gap-4">
          {
            tabName.map((tab) => (
              <TabsTrigger className="text-base py-4 px-3" value={tab}>{tab}</TabsTrigger>
            ))
          }
        </TabsList>


        {/* showing all delivery data */}
        <div className="mt-5">
        {
          tabName.map(tab => (

            <TabsContent key={tab} value={tab}>
              <h2 className="text-xl ">{tab}</h2>
             
              {
                tabData[tab].map((data) => (
                  
                  <FAQSection data={data} ></FAQSection>
                ))
              }
            
            </TabsContent>
          ))
        }
        </div>
      </Tabs>
    
      </>
  )
}
