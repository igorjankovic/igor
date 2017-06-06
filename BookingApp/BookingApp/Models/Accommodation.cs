using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace BookingApp.Models
{
    public class Accommodation
    {
        public int Id { get; set; }

      
        public String Name { get; set; }
        public String Description { get; set; }
        public String Adress { get; set; }
        public String AvrageGrade { get; set; }
        public String Latitude { get; set; }
        public String Longitude { get; set; }
        public String ImaageURL { get; set; }
        public bool Approved { get; set; }

        public List<Room> Rooms { get; set; }

       
        [ForeignKey("AccommodationType")]
        public int AccommodatonTypeId { get; set; }
        public AccommodationType AccommodationType { get; set; }
    }
}