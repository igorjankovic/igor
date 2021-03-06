﻿using BookingApp.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;

namespace BookingApp.Controllers
{
    [RoutePrefix("api")]
    public class RoomController : ApiController
    {
        private BAContext db = new BAContext();


        [HttpGet]
        [Route("Rooms")]
        public IQueryable<Room> GetRoom()
        {
            return db.Rooms;
        }

        [HttpGet]
        [Route("Rooms/{id}")]
        [ResponseType(typeof(Room))]
        public IHttpActionResult GetRoom(int id)
        {
            Room room = db.Rooms.Find(id);
            if (room == null)
            {
                return NotFound();
            }

            return Ok(room);
        }
        [HttpPut]
        [Route("Rooms/{id}")]
        [ResponseType(typeof(void))]
        public IHttpActionResult PutRoom(int id, Room room)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != room.Id)
            {
                return BadRequest();
            }

            db.Entry(room).State = EntityState.Modified;


            db.SaveChanges();

            return Ok();

        }
        [HttpDelete]
        [Route("Rooms/{id}")]
        [ResponseType(typeof(Accommodation))]
        public IHttpActionResult DeleteRoom(int id)
        {
            Room room = db.Rooms.Find(id);
            if (room == null)
            {
                return NotFound();
            }

            db.Rooms.Remove(room);
            db.SaveChanges();

            return Ok(room);
        }



        [HttpPost]
        [Route("Rooms")]
        [ResponseType(typeof(Room))]
        public IHttpActionResult PostRoom(Room room)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
          
            db.Rooms.Add(room);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { controller="Room" , id = room.Id  }, room);
        }
        private bool RoomExists(int id)
        {
            return db.Rooms.Count(e => e.Id == id) > 0;
        }
    }
}
