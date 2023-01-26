﻿using Sweeter.Models.Entities;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace Sweeter.Models.Dto
{
    public class SweetAllDto
    {
        [Required]
        [StringLength(255)]
        public string Text { get; set; }
        public string DataPostagem { get; set; }
        public int EnumStatus { get; set; }
        public bool Editado { get; set; }
        public int UserId { get; set; }

    }
}
