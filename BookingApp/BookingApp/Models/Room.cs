using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace BookingApp.Models
{
    public class Room
    {

        public int Id { get; set; }

        [Required]
        public int RoomNumber { get; set; }
        public int Bedcount { get; set; }
        public String Description { get; set; }

        public double PricePerNight { get; set; }

        public List<RoomReservations> RoomReservs { get; set; }

     
        [ForeignKey("Accommodation")]
        public int AccommodationId { get; set; }
        public Accommodation Accommodation { get; set; }
       
    }
}