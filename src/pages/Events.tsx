
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, TreePine, BookOpen, Award, Users } from "lucide-react";

const Events = () => {
  const eventTypes = [
    {
      icon: TreePine,
      title: "Tree Planting Drives",
      description: "Community environmental restoration events",
      frequency: "Monthly"
    },
    {
      icon: BookOpen,
      title: "Training Workshops",
      description: "Capacity building and skill development sessions",
      frequency: "Bi-weekly"
    },
    {
      icon: Users,
      title: "Community Dialogues",
      description: "Public forums on governance and policy issues",
      frequency: "Weekly"
    },
    {
      icon: Award,
      title: "Youth Summits",
      description: "Empowerment events for young leaders",
      frequency: "Quarterly"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Events</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Join us at community dialogues, training workshops, tree planting drives, and youth summits across Kenya
            </p>
          </div>
        </div>
      </section>

      {/* No Current Events */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Upcoming Events</h2>
            <p className="text-xl text-gray-600">Stay tuned for upcoming opportunities to get involved</p>
          </div>
          <div className="max-w-2xl mx-auto">
            <Card className="text-center">
              <CardContent className="p-12">
                <Calendar className="h-16 w-16 text-gray-400 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">No Events Currently Scheduled</h3>
                <p className="text-gray-600 mb-6">
                  We're planning exciting events and workshops. Check back soon or subscribe to our newsletter 
                  to be the first to know when new events are announced.
                </p>
                <Button className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white font-semibold">
                  Subscribe for Updates
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Event Types */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Types of Events We Host</h2>
            <p className="text-xl text-gray-600">Regular programming to support our mission</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {eventTypes.map((type, index) => (
              <Card key={index} className="text-center group hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="bg-gradient-to-br from-green-500 to-blue-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <type.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{type.title}</h3>
                  <p className="text-gray-600 mb-3">{type.description}</p>
                  <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium inline-block">
                    {type.frequency}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Event Calendar */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Event Calendar</h2>
            <p className="text-xl text-gray-600">Mark your calendar for upcoming community events</p>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="text-center">
              <Calendar className="h-24 w-24 text-green-600 mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Full Event Calendar</h3>
              <p className="text-lg text-gray-600 mb-6">
                View all our upcoming events, workshops, and community activities in one place.
              </p>
              <Button size="lg" className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white font-semibold">
                View Full Calendar
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Join Our Community</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Stay informed about all our events and be the first to know about new opportunities to get involved.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold">
              Subscribe to Events
            </Button>
            <Button size="lg" className="bg-white text-green-800 hover:bg-gray-100 font-semibold">
              Follow Us on Social Media
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events;
