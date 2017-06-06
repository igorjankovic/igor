using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Security.AccessControl;
using System.Web;
using Microsoft.AspNet.Identity.EntityFramework;

namespace BookingApp.Models
{
    public class BAContext: IdentityDbContext<BAIdentityUser>
    {   
        public virtual DbSet<AppUser> AppUsers { get; set; }
        public DbSet<Room> Rooms { get; set; }
        public DbSet<RoomReservations> RoomResvs { get; set; }
        public DbSet<AccommodationType> AccommodationTypes { get; set; }
        public DbSet<Accommodation> Accommodations { get; set; }

        public BAContext() : base("name=BADB")
        {            
        }

        public static BAContext Create()
        {
            return new BAContext();
        }
    }
}