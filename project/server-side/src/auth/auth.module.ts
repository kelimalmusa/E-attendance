import { Module } from "@nestjs/common";
import { AuthService } from "./auth/auth.service";
import { OgrenciService } from "src/ogrenci/ogrenci/ogrenci.service";
import { DatabaseService } from "src/database/service/database.service";
import { DatabaseModule } from "src/database/database.module";
import { YoklamaService } from "src/yoklama/yoklama/yoklama.service";
import { DersService } from "src/ders/ders/ders.service";
import { TwitterService } from "src/twitter/twitter/twitter.service";
import { HocaService } from "src/hoca/hoca/hoca.service";
import { OgrenciModule } from "src/ogrenci/ogrenci.module";
import { LocalStrategy } from "./auth/local.strategy";
import { LocalAuthGuard } from "./auth/local-auth.guard";
import { PassportModule } from "@nestjs/passport";
import { JwtModule } from "@nestjs/jwt";
import { jwtConstants } from "./auth/constants";
import { JwtStrategy } from "./auth/jwt.strategy";
import { JwtAuthGuard } from "./auth/jwt-auth.guard";

@Module({
  providers: [
    AuthService,
    OgrenciService,
    DatabaseService,
    YoklamaService,
    DersService,
    TwitterService,
    HocaService,
    LocalStrategy,
    TwitterService,
    LocalAuthGuard,
    JwtStrategy,
    JwtAuthGuard
  ],
  imports: [
    OgrenciModule,
    PassportModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: "60s" }
    })
  ],
  exports: [AuthService]
})
export class AuthModule {}
