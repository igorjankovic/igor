using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace BookingApp.Models
{
    public class AccommodationType
    {
        public int Id { get; set; }
       
        public String Name { get; set; }

        public List<Accommodation> Accommodations { get; set; }
    }
}