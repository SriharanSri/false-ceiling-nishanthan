import { Instagram, Mail, Phone, MapPin } from "lucide-react";
import image from "./../image/nishanthan.jpeg";
const ContactUs = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Contact Image */}
          <div className="relative">
            <img
              src={image}
              alt="Contact Person"
              className="w-full h-[600px] object-cover rounded-lg"
            />
            <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm p-4 rounded-lg">
              <h3 className="text-xl font-semibold">Nishanthan</h3>
              <p className="text-gray-600">
                False Ceiling and Painting Contractor
              </p>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="text-center md:text-left">
              <h2 className="text-4xl font-bold mb-4">Get in Touch</h2>
              <p className="text-gray-600 max-w-md">
                Let's discuss your home needs. Reach out through any of these
                channels.
              </p>
            </div>

            <div className="space-y-6">
              <a
                href="mailto:mithranm535@gmail.com"
                className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <Mail className="w-6 h-6 text-blue-600 mr-4" />
                <div>
                  <h4 className="font-medium">Email</h4>
                  <p className="text-gray-600">mithranm535@gmail.com</p>
                </div>
              </a>

              <a
                href="tel:+917604962528"
                className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <Phone className="w-6 h-6 text-blue-600 mr-4" />
                <div>
                  <h4 className="font-medium">Phone</h4>
                  <p className="text-gray-600">7604962528</p>
                </div>
              </a>

              <a
                href="https://www.instagram.com/nishanthan_96?igsh=bzhybG40aXFhaGs="
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <Instagram className="w-6 h-6 text-blue-600 mr-4" />
                <div>
                  <h4 className="font-medium">Instagram</h4>
                  <p className="text-gray-600">@nishanthan_96</p>
                </div>
              </a>

              <div className="flex items-center p-4 bg-gray-50 rounded-lg">
                <MapPin className="w-6 h-6 text-blue-600 mr-4" />
                <div>
                  <h4 className="font-medium">Location</h4>
                  <p className="text-gray-600">
                    27, Moongiloorani, Manamadurai 630606
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
